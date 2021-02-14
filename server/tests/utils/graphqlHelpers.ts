/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { afterAll, expect } from '@jest/globals';
import { createPostGraphileSchema, withPostGraphQLContext } from 'postgraphile';
import { Pool } from 'pg';
import { default as faker } from 'faker';
import { graphql } from 'graphql';
import { postgraphileOptions } from '../../src/postgraphileOptions';
import { postgresUrl } from '../../src/postgresUrl';
import { sanitize } from './sanitizeSnapshot';

const pools: any = {};

// Make sure we release those pgPools so that our tests exit!
afterAll(() => {
  const keys = Object.keys(pools);
  return Promise.all(
    keys.map(async key => {
      try {
        const pool = pools[key];
        delete pools[key];
        await pool.end();
      } catch (e) {
        console.error('Failed to release connection!');
        console.error(e);
      }
    })
  );
});

export const createTestUser = async (role: string) => {
  if (!pools[postgresUrl]) {
    pools[postgresUrl] = new Pool({ connectionString: postgresUrl });
  }
  const pool = pools[postgresUrl];
  const client = await pool.connect();

  const email = faker.internet.email();
  const { rows } = await client.query(
    'INSERT INTO person (email, role) VALUES ($1, $2) RETURNING id',
    [email, role]
  );

  return rows[0];
};

interface RunGraphQLQueryArgs {
  personId?: string;
  role?: string;
  query: string;
  variables: any;
  expectations(arg0: any): void;
  databaseSetup(arg0: any): Promise<void>;
  databaseTeardown(arg0: any): Promise<void>;
}

export const runGraphQLQuery = async (args: RunGraphQLQueryArgs) => {
  const {
    personId,
    role,
    query,
    variables,
    expectations,
    databaseSetup,
    databaseTeardown
  } = args;

  const schema = await createPostGraphileSchema(
    postgresUrl,
    'public',
    postgraphileOptions
  );

  if (!pools[postgresUrl]) {
    pools[postgresUrl] = new Pool({ connectionString: postgresUrl });
  }
  const pool = pools[postgresUrl];
  const postgresRole = role || 'anonymous';

  const superuserClient = await pool.connect();
  await databaseSetup(superuserClient);

  return await withPostGraphQLContext({
    pgPool: pool,
    pgSettings: {
      'person.id': personId,
      role: postgresRole,
    },
  }, async (context) => {
    const { pgClient } = context;
    try {
      const result = await graphql(
        schema,
        query,
        null,
        { ...context },
        variables
      );

      expect(sanitize(result)).toMatchSnapshot();
      await expectations(result);

      return result;
    } finally {
      await pgClient.query('ROLLBACK;');

      await databaseTeardown(superuserClient);
      await superuserClient.release();
    }
  });
};
