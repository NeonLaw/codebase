import { describe, expect, it } from '@jest/globals';
import {
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
        const { id: addresseeId } = await insertPersonFixture(pgClient);
        const { id: addressorId } = await insertPersonFixture(pgClient);

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
