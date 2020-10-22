import { gql, makeExtendSchemaPlugin } from 'graphile-utils';
import { PostGraphileOptions } from 'postgraphile';
import { getSignedUploadUrl } from '@neonlaw/cloud-storage-buckets';

const uploadPlugin = makeExtendSchemaPlugin(() => ({
  resolvers: {
    Mutation: {
      async getSignedUploadUrl(_, args, context) {
        if (!context.neonLawPerson) {
          return;
        }

        const url = await getSignedUploadUrl({
          filename: args.filename,
          personUuid: context.neonLawPerson.id,
        });
        return { url };
      }
    }
  },
  typeDefs: gql`
    extend type Mutation {
      getSignedUploadUrl(
        filename: String
      ): GetSignedUploadUrlPayload
    }

    type GetSignedUploadUrlPayload {
      url: String
    }
  `,
}));

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
  appendPlugins: [uploadPlugin],
  disableQueryLog: false,
  dynamicJson: true,
  enableCors: true,
  enableQueryBatching: true,
  enhanceGraphiql: process.env.SHOW_GRAPHIQL === 'true' ? true : false,
  extendedErrors: ['errcode'],
  graphiql: process.env.SHOW_GRAPHIQL === 'true' ? true : false,
  graphiqlRoute: '/api/graphiql',
  graphqlRoute: '/api/graphql',
  ignoreIndexes: false,
  ignoreRBAC: false,
  legacyRelations: 'omit' as const,
  pgSettings: async (request: any) => {
    const settings: any = {};

    if (request.user) {
      const { role, id } = request.authenticatedPerson;
      settings['role'] = role;
      settings['person.id'] = id;
    } else {
      settings['role'] = 'anonymous';
    }
    settings['application_name'] = request['X-Trace-Id'];

    return settings;
  },
  retryOnInitFail: true,
  setofFunctionsContainNulls: false
};
