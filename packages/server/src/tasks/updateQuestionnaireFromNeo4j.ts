import { neo4jSession } from '../utils/neo4jSession';

export const updateQuestionnaireFromNeo4j = async (
  payload,
  { logger, query }
): Promise<void> => {
  const { questionnaireId } = payload;

  const questionnaireQuery = await query(
    'SELECT id, question_tree FROM questionnaire WHERE id = $1 LIMIT 1',
    [questionnaireId]
  );
  const { id, questionTree } = questionnaireQuery.rows[0];

  const session = neo4jSession({ databaseName: 'questionnaires' });
  const newQuestionTree = Object.assign({}, questionTree);

  try {
    const firstQuestion = await session.run(
      'MATCH (a:Questionnaire {id: $id})-[:NEXT_QUESTION]->(question) '+
      'RETURN question',
      { id }
    );
    const firstQuestionId =
      firstQuestion.records &&
      firstQuestion.records[0] &&
      firstQuestion.records[0]['_fields'][0].properties.id;
    if (!firstQuestionId) {
      logger.info('no questions');
      return;
    }
    logger.info(firstQuestionId);

    newQuestionTree['begin'] = firstQuestionId;

    await query(
      'UPDATE questionnaire SET question_tree = $1 WHERE id = $2',
      [JSON.stringify(newQuestionTree), id]
    );

  } finally {
    await session.close();
  }
};
