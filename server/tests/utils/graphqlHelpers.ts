import { Pool } from 'pg';
import { afterAll } from '@jest/globals';
import { default as faker } from 'faker';
import { postgresUrl } from '../../src/postgresUrl';

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
