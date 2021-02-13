import { neo4jDriver } from '../utils/neo4jDriver';

export const addQuestionToEndOfQuestionnaire = async (
  payload,
  { logger, query }
): Promise<void> => {
  const { questionId, questionnaireId } = payload;

  const session = neo4jDriver({ databaseName: 'questionnaires' }).session();

  try {
    const lastQuestion = await session.run(
      'MATCH path=(a:Questionnaire {id: $questionnaireId })-' +
      '[:NEXT_QUESTION*]->(b) ' +
      'RETURN LAST(nodes(path))',
      { questionnaireId }
    );

    logger.info(JSON.stringify(lastQuestion.records));

    const lastQuestionId = lastQuestion.records &&
      lastQuestion.records[0] &&
      lastQuestion.records[0]['_fields'][0].properties.id;

    logger.info(lastQuestionId);

    // create relationship
    if (lastQuestionId) {
      const createNextQuestionRelationship = await session.run(
        'MATCH (a:Question {id: $lastQuestionId}),'+
        '(b:Question {id: $questionId}) '+
        'CREATE (a)-[r:NEXT_QUESTION]->(b) ' +
        'RETURN a,r,b',
        { lastQuestionId, questionId }
      );

      logger.info(createNextQuestionRelationship );
    } else {
      const createNextQuestionRelationship = await session.run(
        'MATCH (a:Questionnaire {id: $questionnaireId}),'+
        '(b:Question {id: $questionId}) '+
        'CREATE (a)-[r:NEXT_QUESTION]->(b) ' +
        'RETURN a,r,b',
        { questionId, questionnaireId }
      );

      logger.info(createNextQuestionRelationship );
    }

    // refresh questionnaire
    await query(
      'SELECT update_questionnaire_from_neo4j($1);',
      [questionnaireId]
    );
  } catch(error) {
    throw new Error(error);
  } finally {
    await session.close();
  }
};
