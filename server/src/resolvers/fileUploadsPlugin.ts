import { gql, makeExtendSchemaPlugin } from 'graphile-utils';
import { createTransloaditToken } from './createTransloaditToken';

export const fileUploadsPlugin = makeExtendSchemaPlugin(() => {
  return {
    resolvers: {
      Mutation: {
        createTransloaditToken,
      }
    },
    typeDefs: gql`
      extend type Mutation {
        createTransloaditToken: CreateTransloaditTokenPayload
      }

      type CreateTransloaditTokenPayload {
        expires: String
        signature: String
      }
    `,
  };
});
