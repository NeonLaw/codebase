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
        relatedQuestions: async (question, _, context) => {
          const { id } = question;
          const { pgClient } = context;

          const session = neo4jDriver(
            { databaseName: 'questionnaires' }
          ).session();

          const relatedQuestionsQuery = await session.run(
            'MATCH (a:Question { id: $id })-[:RELATED_QUESTION]-(q:Question) '+
            'RETURN q',
            { id }
          );

          const questionIds = relatedQuestionsQuery.records.map((record) => {
            return record['_fields'][0]['properties']['id'];
          });

          const questionQuery = await pgClient.query(
            'SELECT * FROM question WHERE id = ANY($1::uuid[]);',
            [questionIds]
          );

          return questionQuery.rows;
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
