import { gql, makeExtendSchemaPlugin } from 'graphile-utils';

export const questionPlugin = makeExtendSchemaPlugin(() => {
  return {
    resolvers: {
      Question: {
        isLinkedToQuestionnaire: async () => {
          return [];
        },
        relatedQuestions: async () => {
          return [];
        },
      },
    },
    typeDefs: gql`
      extend type Question {
        isLinkedToQuestionnaire: Boolean
        relatedQuestions: [Question]
      }
    `,
  };
});
