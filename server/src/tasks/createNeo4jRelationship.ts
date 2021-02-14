import { neo4jDriver } from '../utils/neo4jDriver';

export const createNeo4jRelationship = async (
  payload, { logger }
): Promise<void> => {
  const { fromId, fromType, toId, toType, relationship } = payload;
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const session = neo4jDriver({ databaseName: 'questionnaires' }).session();

  try {
    const neo4jQuery = await session.run(
      `MATCH (a:${capitalize(fromType)} {id: $fromId}),`+
      `(b:${capitalize(toType)} {id: $toId}) `+
      `CREATE (a)-[r:${relationship}]->(b) ` +
      'RETURN a,r,b',
      { fromId, toId }
    );
    logger.info(JSON.stringify(neo4jQuery));

  } catch(error) {
    throw new Error(error);
  } finally {
    await session.close();
  }
};
