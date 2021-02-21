import { Pool } from 'pg';
import { afterAll } from '@jest/globals';
import { postgresUrl } from '../../src/postgresUrl';

export { insertMatterFixture } from './db/insertMatterFixture';
export { insertMatterTemplateFixture } from './db/insertMatterTemplateFixture';
export { insertPersonFixture } from './db/insertPersonFixture';

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

export const startAnonymousSession = (client: any) => {
  client.query('select set_config(\'role\', \'anonymous\', true)');
};

export const startPortalSession = async (
  client: any,
  email = 'portal@sink.sendgrid.com'
) => {
  const { rows } = await client.query(
    'INSERT INTO person (email, role, sub) ' +
    'VALUES ($1, \'portal\', \'portal-sub\') '+
    'ON CONFLICT("email") DO UPDATE SET email=EXCLUDED.email RETURNING id',
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

export const startLawyerSession = async (
  client: any,
  email = 'lawyer@sink.sendgrid.com'
) => {
  const { rows } = await client.query(
    'INSERT INTO person (email, role, sub) ' +
    'VALUES ($1, \'lawyer\', \'lawyer-sub\') ' +
    'ON CONFLICT("email") DO UPDATE SET email=EXCLUDED.email RETURNING id',
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

export const startAdminSession = async (
  client: any,
  email = 'admin@sink.sendgrid.com'
) => {
  const { rows } = await client.query(
    'INSERT INTO person (email, role, sub) ' +
    'VALUES ($1, \'admin\', \'admin-sub\') '+
    'ON CONFLICT("email") DO UPDATE SET email=EXCLUDED.email RETURNING id',
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
