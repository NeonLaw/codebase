import { neo4jSession } from '../utils/neo4jSession';

export const upsertQuestionnaireToNeo4j = async (
  payload,
  helpers
): Promise<void> => {
  const { questionnaireId } = payload;

  const questionnaireQuery = await helpers.query(
    'SELECT id, name FROM questionnaire WHERE id = $1 LIMIT 1',
    [questionnaireId]
  );
  const { name, id } = questionnaireQuery.rows[0];

  const session = neo4jSession({ databaseName: 'questionnaires' });

  try {
    await session.run(
      'MERGE (n:Questionnaire { id: $id }) return n',
      { id }
    );
    await session.run(
      'MATCH (q:Questionnaire {id: $id}) SET q.name = $name RETURN q',
      { id, name }
    );
  } finally {
    await session.close();
  }
};
