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
      withRootDb(async (pgClient: any) => {
        await startAnonymousSession(pgClient);

        await expect(pgClient.query('select * from person;')).rejects.toThrow(
          /permission denied for table person/
        );
      })
    );
  });

  describe('a portal user', () => {
    it('only select users that are themself', () =>
      withRootDb(async (pgClient: any) => {
        await insertPersonFixture(pgClient);
        const email = faker.internet.email();
        await startPortalSession(pgClient, email);
        const { rows } = await pgClient.query('select * from person;');

        expect(rows).toHaveLength(1);
        expect(rows[0].email).toEqual(email);
      })
    );
  });

  describe('a lawyer user', () => {
    it('only select users that are themself', () =>
      withRootDb(async (pgClient: any) => {
        await insertPersonFixture(pgClient);
        const email = faker.internet.email();
        await startLawyerSession(pgClient, email);

        const { rows } = await pgClient.query('select * from person;');

        expect(rows).toHaveLength(1);
        expect(rows[0].email).toEqual(email);
      })
    );
  });

  describe('a admin user', () => {
    it('selects all users', () =>
      withRootDb(async (pgClient: any) => {
        await insertPersonFixture(pgClient);
        const email = faker.internet.email();
        await startAdminSession(pgClient, email);

        const { rows } = await pgClient.query('select * from person;');

        expect(rows.length).toBeGreaterThanOrEqual(2);
      })
    );
  });
});
