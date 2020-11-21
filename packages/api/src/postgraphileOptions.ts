import { PostGraphileOptions, makePluginHook } from 'postgraphile';
import { gql, makeExtendSchemaPlugin } from 'graphile-utils';
import GraphilePro from '@graphile/pro';
import PgPubsub from '@graphile/pg-pubsub';
import { getTransloaditToken } from './getTransloaditToken';
import newrelic from 'newrelic';

const uploadPlugin = makeExtendSchemaPlugin((build) => ({
  resolvers: {
    CreateResponseDocumentFromUploadPayload: {
      async document({ responseDocumentId }, args, context, resolveInfo) {
        const { pgSql: sql } = build;
        const [row] = await resolveInfo.graphile.selectGraphQLResultFromTable(
          sql.fragment`document`,
          (tableAlias, queryBuilder) => {
            queryBuilder.where(
              sql.fragment`${tableAlias}.id = ${sql.value(responseDocumentId)}`
            );
          }
        );

        return row;
      }
    },
    Mutation: {
      async createResponseDocumentFromUpload(_, args, context) {
        const { pgClient } = context;
        // Start a sub-transaction
        await pgClient.query('SAVEPOINT graphql_mutation');

        try {
          // Our custom logic to register the user:
          const {
            rows: [document],
          } = await pgClient.query(
            'INSERT INTO document(name, email, bio) '+
              'VALUES ($1, $2, $3) RETURNING id',
            [args.input.name, args.input.email, args.input.bio]
          );

          const {
            rows: [responseDocument],
          } = await pgClient.query(
            'INSERT INTO response.document(document_id, email, bio) '+
              'VALUES ($1, $2, $3) RETURNING id',
            [document.id, args.input.email, args.input.bio]
          );

          return {
            query: build.$$isQuery,
            responseDocumentId: responseDocument.id,
          };
        } catch (e) {
          // Oh noes! If at first you don't succeed,
          // destroy all evidence you ever tried.
          await pgClient.query('ROLLBACK TO SAVEPOINT graphql_mutation');
          throw e;
        } finally {
          // Release our savepoint so it doesn't conflict with other mutations
          await pgClient.query('RELEASE SAVEPOINT graphql_mutation');
        }
      },
      async getTransloaditToken(_, args, context) {
        if (!context.authenticatedPerson) {
          return;
        }

        const { expires, signature } = await getTransloaditToken({
          personUuid: context.authenticatedPerson.id,
          template: args.template
        });

        return { expires, signature };
      },
    }
  },
  typeDefs: gql`
    extend type Mutation {
      getTransloaditToken(
        template: String!
      ): GetTransloaditTokenPayload
      createResponseDocumentFromUpload(
        input: CreateResponseDocumentFromUploadInput!
      ): CreateResponseDocumentFromUploadPayload
    }

    type GetTransloaditTokenPayload {
      expires: String
      signature: String
    }

    input CreateResponseDocumentFromUploadInput {
      uploadUrl: String!
      responseId: UUID!
    }

    type CreateResponseDocumentFromUploadPayload {
      document: Document
    }
  `,
}));

const pluginHook = makePluginHook([
  PgPubsub,

  ...(process.env.GRAPHILE_LICENSE ? [GraphilePro] : []),
]);

export const postgraphileOptions: PostGraphileOptions = {
  async additionalGraphQLContextFromRequest(request) {
    if (request.authenticatedPerson && request.authenticatedPerson.id) {
      const { id, role } = request.authenticatedPerson;
      return {
        authenticatedPerson: { id, role },
      };
    }

    return {};
  },
  allowExplain: process.env.SHOW_GRAPHIQL === 'true' ? true : false,
  appendPlugins: [uploadPlugin],
  defaultPaginationCap:
    parseInt(process.env.GRAPHQL_PAGINATION_CAP || '', 10) || 50,
  disableQueryLog: false,
  dynamicJson: true,
  enableCors: true,
  enableQueryBatching: true,
  enhanceGraphiql: process.env.SHOW_GRAPHIQL === 'true' ? true : false,
  exposeGraphQLCost:
    (parseInt(process.env.HIDE_QUERY_COST || '', 10) || 0) < 1,
  extendedErrors: ['errcode'],
  graphiql: process.env.SHOW_GRAPHIQL === 'true' ? true : false,
  graphiqlRoute: '/api/graphiql',
  graphqlCostLimit:
    parseInt(process.env.GRAPHQL_COST_LIMIT || '', 10) || 30000,
  graphqlDepthLimit:
    parseInt(process.env.GRAPHQL_DEPTH_LIMIT || '', 10) || 12,
  graphqlRoute: '/api/graphql',
  ignoreIndexes: false,
  ignoreRBAC: false,
  legacyRelations: 'omit' as const,
  pgSettings: async (request: any) => {
    const settings: any = {};
    const traceId = request['X-Trace-Id'];

    if (request.user) {
      const { role, id } = request.authenticatedPerson;
      settings['role'] = role;
      settings['person.id'] = id;
      settings['application_name'] = `${id}-${role}-${traceId}`;
    } else {
      settings['role'] = 'anonymous';
      settings['application_name'] = traceId;
    }


    if (process.env.NODE_ENV === 'production') {
      newrelic.setTransactionName(settings['application_name']);
    }

    return settings;
  },
  pluginHook,
  retryOnInitFail: true,
  setofFunctionsContainNulls: false,
  showErrorStack: true
};
