import * as faker from 'faker';
import { Pool } from 'pg';
import { afterAll } from '@jest/globals';
import { postgresUrl } from '../../src/postgresUrl';

export { createMatter } from './db/createMatter';

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

const withDbFromUrl = async (url: string, fn: any) => {
  if (!pools[url]) {
    pools[url] = new Pool({ connectionString: url });
  }
  const pool = pools[url];
  const client = await pool.connect();
  await client.query('BEGIN ISOLATION LEVEL SERIALIZABLE;');

  try {
    await fn(client);
  } catch (e) {
    // Error logging can be helpful:
    if (typeof e.code === 'string' && e.code.match(/^[0-9A-Z]{5}$/)) {
      console.error([e.message, e.code, e.detail, e.hint, e.where].join('\n'));
    }
    throw e;
  } finally {
    await client.query('ROLLBACK;');
    await client.query('RESET ALL;');
    await client.release();
  }
};

export const withRootDb = (fn: any) =>
  withDbFromUrl(postgresUrl, fn);

export const becomeAnonymousUser = (client: any) => {
  client.query('select set_config(\'role\', \'anonymous\', true)');
};

export const becomePortalUser = async (
  client: any,
  email = 'test@example.com'
) => {
  const { rows } = await client.query(
    'INSERT INTO person (email, role, sub) ' +
    'VALUES ($1, \'portal\', \'portal-sub\') RETURNING id',
    [email]
  );
  const { id } = rows[0];
  await client.query(
    'select set_config(\'role\', \'portal\', true), ' +
    'set_config(\'person.id\', $1, true);',
    [id]
  );

  return { email, id };
};

export const becomeLawyerUser = async (
  client: any,
  email = 'test@example.com'
) => {
  const { rows } = await client.query(
    'INSERT INTO person (email, role, sub) ' +
    'VALUES ($1, \'lawyer\', \'lawyer-sub\') RETURNING id',
    [email]
  );
  const { id } = rows[0];
  await client.query(
    'select set_config(\'role\', \'lawyer\', true), ' +
    'set_config(\'person.id\', $1, true);',
    [id]
  );

  return { email, id };
};

export const becomeAdminUser = async (
  client: any,
  email = 'test@example.com'
) => {
  const { rows } = await client.query(
    'INSERT INTO person (email, role, sub) ' +
    'VALUES ($1, \'admin\', \'admin-sub\') RETURNING id',
    [email]
  );
  const { id } = rows[0];
  await client.query(
    'select set_config(\'role\', \'admin\', true), ' +
    'set_config(\'person.id\', $1, true);',
    [id]
  );

  return { email, id };
};

export const createUser = async (client: any) => {
  const email = faker.internet.email();

  const { rows } = await client.query(
    'INSERT INTO person (email, sub) ' +
    'VALUES ($1, $2) RETURNING (id, email, role)',
    [email, 'test-email']
  );

  return rows[0];
};

export const createFlashcard = async (client: any) => {
  const answer = faker.lorem.paragraph();
  const prompt = faker.lorem.sentence();

  const { rows } = await client.query(
    'INSERT INTO flashcard (prompt, answer) ' +
    'VALUES ($1, $2) RETURNING (id, prompt, answer)',
    [prompt, answer]
  );

  return rows[0];
};

export const createMatterTemplate = async (
  client: any,
) => {
  const uuid = faker.random.uuid();

  const { rows } = await client.query(
    'INSERT INTO matter_template (name, javascript_module) '+
    'VALUES ($1, $2) RETURNING (id)',
    [`delete-your-data-${uuid}`, `deleteYourData-${uuid}`]
  );

  return rows[0];
};
