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
    it('cannot select letters', () =>
      withRootDb(async (pgClient: any) => {
        await startAnonymousSession(pgClient);

        await expect(pgClient.query('select * from letters;')).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });

  describe('a portal user', () => {
    it('cannot select letters', () =>
      withRootDb(async (pgClient: any) => {
        await startPortalSession(pgClient);

        await expect(pgClient.query('select * from letters;')).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });

  describe('a lawyer user', () => {
    it('cannot select letters', () =>
      withRootDb(async (pgClient: any) => {
        await startLawyerSession(pgClient);

        await expect(pgClient.query('select * from letters;')).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });

  describe('a admin user', () => {
    it('can select all letter', () =>
      withRootDb(async (client: any) => {
        await client.query('DELETE FROM letters;');
        const { id: personId } = await insertPersonFixture({ client });
        const { id: addresseeId } = await insertAddressFixture({
          client: client,
          personId
        });
        const { id: addressorId } = await insertAddressFixture({
          client: client,
          personId
        });

        await insertLetterFixture({
          addresseeId,
          addressorId,
          client: client,
        });

        await startAdminSession(client);

        const { rows } = await client.query('select * from letters;');

        expect(rows).toHaveLength(1);
      })
    );
  });
});
