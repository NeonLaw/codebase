import { neo4jDriver } from '../utils/neo4jDriver';

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

  const session = neo4jDriver({ databaseName: 'questionnaires' }).session();

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
