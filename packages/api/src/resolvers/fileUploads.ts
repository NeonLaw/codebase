import { gql, makeExtendSchemaPlugin } from 'graphile-utils';
import { getTransloaditToken } from './getTransloaditToken';

export const fileUploadsPlugin = makeExtendSchemaPlugin((build) => ({
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
      async getMatterDocument(_, args, context) {
        if (!context.authenticatedPerson) {
          return;
        }

        // return signed URL
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
      // async createMatterDocumentFromUpload(_, args, context) {
      //   const { filename, documentTemplateName, matterId } = args;
      //   if (!context.authenticatedPerson) {
      //     return;
      //   }
      //   const DocumentTemplate = require(
      //     `@neonlaw/matter-templates/src/${matterTemplate.javascriptModule}`
      //   );
      //   new DocumentTemplate(matterId);
      // },
      async writeLetterToRickie(_, args, context) {
        if (!context.authenticatedPerson) {
          return;
        }

        // return signed URL
      }
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
