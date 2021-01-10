import { gql, makeExtendSchemaPlugin } from 'graphile-utils';
import { getTransloaditToken } from './getTransloaditToken';

export const fileUploadsPlugin = makeExtendSchemaPlugin(() => ({
  resolvers: {
    Mutation: {
      async getTransloaditToken(_, args, context) {
        if (!context.authenticatedPerson) {
          return;
        }

        const { expires, signature } = await getTransloaditToken();

        return { expires, signature };
      }
    }
  },
  typeDefs: gql`
    extend type Mutation {
      getTransloaditToken(): GetTransloaditTokenPayload
    }

    type GetTransloaditTokenPayload {
      expires: String
      signature: String
    }
  `,
}));
