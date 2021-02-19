import { neo4jDriver } from '../utils/neo4jDriver';

export const addRelatedQuestionRelationship = async (
  payload,
  { logger }
): Promise<void> => {
  const { firstQuestionId, secondQuestionId } = payload;

  const session = neo4jDriver({ databaseName: 'questionnaires' }).session();

  try {
    const newRelatedQuestionRelationship = await session.run(
      'MATCH (a:Question {id: $firstQuestionId }),'+
      '(b:Question {id: $secondQuestionId }) ' +
      'MERGE (a)-[r:RELATED_QUESTION]->(b) ' +
      'RETURN a,r,b',
      { firstQuestionId, secondQuestionId }
    );

    logger.info(JSON.stringify(newRelatedQuestionRelationship.records));

    return;
  } catch(error) {
    throw new Error(error);
  } finally {
    await session.close();
  }
};
