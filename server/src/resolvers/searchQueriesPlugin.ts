import { gql, makeExtendSchemaPlugin } from 'graphile-utils';

const publicQueries = async () => {
  return [{
    body: 'This is a <b>quesiton</b>',
    id: '/questions',
  }];
};

export const searchQueriesPlugin = makeExtendSchemaPlugin(() => {
  return {
    resolvers: {
      Query: {
        publicQueries,
      }
    },
    typeDefs: gql`
      extend type Query {
        publicQueries: [PublicQueryPayload]
      }

      type PublicQueryPayload {
        id: String!
        body: String!
      }
    `,
  };
});
