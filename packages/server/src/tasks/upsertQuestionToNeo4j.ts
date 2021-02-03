import { neo4jSession } from '../utils/neo4jSession';

export const upsertQuestionToNeo4j = async (
  payload,
  helpers
): Promise<void> => {
  const { questionId } = payload;

  const questionQuery = await helpers.query(
    'SELECT id, prompt, help_text FROM question WHERE id = $1 LIMIT 1',
    [questionId]
  );
  const { prompt, id, help_text } = questionQuery.rows[0];

  const session = neo4jSession({ databaseName: 'questionnaires' });

  try {
    await session.run(
      'MERGE (n:Question { id: $id }) return n',
      { id }
    );
    await session.run(
      'MATCH (q:Question {id: $id}) '+
      'SET q.prompt = $prompt '+
      'SET q.help_text = $help_text '+
      'RETURN q',
      { help_text: JSON.stringify(help_text), id, prompt }
    );
  } finally {
    await session.close();
  }
};
