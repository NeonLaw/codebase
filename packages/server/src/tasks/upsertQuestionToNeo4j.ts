import { default as neo4j } from 'neo4j-driver';

export const upsertQuestionToNeo4j = async (
  payload,
  helpers
): Promise<void> => {
  const { questionId } = payload;

  const questionQuery = await helpers.query(
    'SELECT id, prompt FROM question WHERE id = $1 LIMIT 1',
    [questionId]
  );
  const { prompt, id } = questionQuery.rows[0];

  const driver = neo4j.driver(
    `${process.env.NEO4J_URL}/questionnaires`,
    neo4j.auth.basic('neo4j', 'graphs')
  );
  const session = driver.session();

  try {
    await session.run(
      'MERGE (n:Question { id: $id }) return n',
      { id }
    );
    await session.run(
      'MATCH (q:Question {id: $id}) SET q.prompt = $prompt RETURN q',
      { id, prompt }
    );
  } finally {
    await session.close();
  }
};
