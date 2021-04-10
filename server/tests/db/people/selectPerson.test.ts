import * as faker from 'faker';
import { describe, expect, it } from '@jest/globals';
import {
  insertPersonFixture,
  startAdminSession,
  startAnonymousSession,
  startLawyerSession,
  startPortalSession,
  withRootDb
} from '../../utils/dbHelpers';

describe('SELECT * FROM person;', () => {
  describe('an anonymous user', () => {
    it('cannot select users', () =>
      withRootDb(async (client: any) => {
        await startAnonymousSession(client);

        await expect(client.query('select * from person;')).rejects.toThrow(
          /permission denied for table person/
        );
      })
    );
  });

  describe('a portal user', () => {
    it('only select users that are themself', () =>
      withRootDb(async (client: any) => {
        await insertPersonFixture({ client });
        const email = faker.internet.email();
        await startPortalSession(client, email);
        const { rows } = await client.query('select * from person;');

        expect(rows).toHaveLength(1);
        expect(rows[0].email).toEqual(email);
      })
    );
  });

  describe('a lawyer user', () => {
    it('only select users that are themself', () =>
      withRootDb(async (client: any) => {
        await insertPersonFixture({ client });
        const email = faker.internet.email();
        await startLawyerSession(client, email);

        const { rows } = await client.query('select * from person;');

        expect(rows).toHaveLength(1);
        expect(rows[0].email).toEqual(email);
      })
    );
  });

  describe('a admin user', () => {
    it('selects all users', () =>
      withRootDb(async (client: any) => {
        await insertPersonFixture({ client });
        const email = faker.internet.email();
        await startAdminSession(client, email);

        const { rows } = await client.query('select * from person;');

        expect(rows.length).toBeGreaterThanOrEqual(2);
      })
    );
  });
});
