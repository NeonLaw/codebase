import { gql, makeExtendSchemaPlugin } from 'graphile-utils';
import { getTransloaditToken } from './getTransloaditToken';

export const fileUploadsPlugin = makeExtendSchemaPlugin(() => {
  return {
    resolvers: {
      Mutation: {
        getTransloaditToken,
      }
    },
    typeDefs: gql`
      extend type Mutation {
        getTransloaditToken: GetTransloaditTokenPayload
      }

      type GetTransloaditTokenPayload {
        expires: String
        signature: String
      }
    `,
  };
});
