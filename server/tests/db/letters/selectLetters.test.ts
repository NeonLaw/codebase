import { describe, expect, it } from '@jest/globals';
import {
  insertAddressFixture,
  insertLetterFixture,
  insertPersonFixture,
  startAdminSession,
  startAnonymousSession,
  startLawyerSession,
  startPortalSession,
  withRootDb
} from '../../utils/dbHelpers';

describe('SELECT * FROM matter;', () => {
  describe('an anonymous user', () => {
    it('cannot select matters', () =>
      withRootDb(async (pgClient: any) => {
        await startAnonymousSession(pgClient);

        await expect(pgClient.query('select * from letter;')).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });

  describe('a portal user', () => {
    it('cannot select letters', () =>
      withRootDb(async (pgClient: any) => {
        await startPortalSession(pgClient);

        await expect(pgClient.query('select * from letter;')).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });

  describe('a lawyer user', () => {
    it('cannot select letters', () =>
      withRootDb(async (pgClient: any) => {
        await startLawyerSession(pgClient);

        await expect(pgClient.query('select * from letter;')).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });

  describe('a admin user', () => {
    it('can select all letter', () =>
      withRootDb(async (pgClient: any) => {
        await pgClient.query('DELETE FROM letter;');
        const { id: personId } = await insertPersonFixture(pgClient);
        const { id: addresseeId } = await insertAddressFixture({
          client: pgClient,
          personId
        });
        const { id: addressorId } = await insertAddressFixture({
          client: pgClient,
          personId
        });

        await insertLetterFixture({
          addresseeId,
          addressorId,
          client: pgClient,
        });

        await startAdminSession(pgClient);

        const { rows } = await pgClient.query('select * from letter;');

        expect(rows).toHaveLength(1);
      })
    );
  });
});
