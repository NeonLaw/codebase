import { neo4jDriver } from '../utils/neo4jDriver';

export const updateQuestionnaireFromNeo4j = async (
  payload,
  { logger, query }
): Promise<void> => {
  const { questionnaireId } = payload;

  const questionnaireQuery = await query(
    'SELECT id, question_tree FROM questionnaire WHERE id = $1 LIMIT 1',
    [questionnaireId]
  );
  const { id } = questionnaireQuery.rows[0];

  const session = neo4jDriver({ databaseName: 'questionnaires' }).session();
  const newQuestionTree = {};

  try {
    const firstQuestion = await session.run(
      'MATCH (a:Questionnaire {id: $id})-[:NEXT_QUESTION]->(question) '+
      'RETURN question',
      { id }
    );
    const firstQuestionId = firstQuestion.records &&
      firstQuestion.records[0] &&
      firstQuestion.records[0]['_fields'][0].properties.id;
    if (!firstQuestionId) {
      logger.info('no questions');
      return;
    }
    logger.info(firstQuestionId);

    newQuestionTree['begin'] = firstQuestionId;

    const addNextQuestion = async(questionId) => {
      const nextQuestion = await session.run(
        'MATCH (a:Question {id: $id})-[:NEXT_QUESTION]->(question) '+
          'RETURN question',
        { id: questionId }
      );
      logger.info(JSON.stringify(nextQuestion));
      const nextQuestionId = nextQuestion.records &&
        nextQuestion.records[0] &&
        nextQuestion.records[0]['_fields'][0].properties.id;
      if (!nextQuestionId) {
        logger.info('no next question');
        return;
      }

      newQuestionTree[questionId] = nextQuestionId;

      await addNextQuestion(nextQuestionId);
    };

    await addNextQuestion(firstQuestionId);

    await query(
      'UPDATE questionnaire SET question_tree = $1 WHERE id = $2',
      [JSON.stringify(newQuestionTree), id]
    );
  } catch(error) {
    throw new Error(error);
  } finally {
    await session.close();
  }
};
