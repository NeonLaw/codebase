import * as faker from 'faker';
import {
  becomeAdminUser,
  becomeAnonymousUser,
  becomeLawyerUser,
  becomePortalUser,
  createUser,
  withRootDb
} from '../../utils/dbHelpers';
import { describe, expect, it } from '@jest/globals';

describe('SELECT * FROM person;', () => {
  describe('as an anonymous user', () => {
    it('cannot select users', () =>
      withRootDb(async (pgClient: any) => {
        await becomeAnonymousUser(pgClient);

        await expect(pgClient.query('select * from person;')).rejects.toThrow(
          /permission denied for table person/
        );
      })
    );
  });

  describe('as a portal user', () => {
    it('only select users that are themself', () =>
      withRootDb(async (pgClient: any) => {
        await createUser(pgClient);
        const email = faker.internet.email();
        await becomePortalUser(pgClient, email);
        const { rows } = await pgClient.query('select * from person;');

        expect(rows).toHaveLength(1);
        expect(rows[0].email).toEqual(email);
      })
    );
  });

  describe('as a lawyer user', () => {
    it('only select users that are themself', () =>
      withRootDb(async (pgClient: any) => {
        await createUser(pgClient);
        const email = faker.internet.email();
        await becomeLawyerUser(pgClient, email);

        const { rows } = await pgClient.query('select * from person;');

        expect(rows).toHaveLength(1);
        expect(rows[0].email).toEqual(email);
      })
    );
  });

  describe('as an admin user', () => {
    it('selects all users', () =>
      withRootDb(async (pgClient: any) => {
        await createUser(pgClient);
        const email = faker.internet.email();
        await becomeAdminUser(pgClient, email);

        const { rows } = await pgClient.query('select * from person;');

        expect(rows).toHaveLength(2);
      })
    );
  });
});
