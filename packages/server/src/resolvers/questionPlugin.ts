import { gql, makeExtendSchemaPlugin } from 'graphile-utils';
import { neo4jDriver } from '../utils/neo4jDriver';

export const questionPlugin = makeExtendSchemaPlugin(() => {
  return {
    resolvers: {
      Question: {
        isLinkedToQuestionnaire: async (question) => {
          const { id } = question;

          const session = neo4jDriver(
            { databaseName: 'questionnaires' }
          ).session();

          const linkedQuestionQuery = await session.run(
            'MATCH (q:Question { id: $id }) '+
            'WHERE NOT ((:Question)-[:NEXT_QUESTION]-(q) ' +
            'OR (:Questionnaire)-[:NEXT_QUESTION]-(q)) ' +
            'RETURN q',
            { id }
          );

          return linkedQuestionQuery.records.length === 1;
        },
      },
    },
    typeDefs: gql`
      extend type Question {
        isLinkedToQuestionnaire: Boolean
      }
    `,
  };
});
