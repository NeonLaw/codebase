import { default as neo4j } from 'neo4j-driver';

export const neo4jDriver = ({ databaseName }) => {
  const driver = neo4j.driver(
    `${process.env.NEO4J_URL}/${databaseName}`,
    neo4j.auth.basic('neo4j', 'graphs')
  );
  return driver;
};
