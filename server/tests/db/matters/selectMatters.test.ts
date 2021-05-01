import { describe, expect, it } from '@jest/globals';
import {
  insertMatterFixture,
  insertMatterTemplateFixture,
  selectPortalPerson,
  startAdminSession,
  startAnonymousSession,
  startPortalSession,
  withRootDb
} from '../../utils/dbHelpers';

describe('SELECT * FROM matter;', () => {
  describe('an anonymous user', () => {
    it('cannot select matters', () =>
      withRootDb(async (client: any) => {
        await startAnonymousSession(client);

        await expect(client.query('select * from matters;')).rejects.toThrow(
          /permission denied for table matter/
        );
      })
    );
  });

  describe('a portal user', () => {
    it('can only select matters where they are the primary contact', () =>
      withRootDb(async (client: any) => {
        const {
          id: matterTemplateId
        } = await insertMatterTemplateFixture({ client });
        const { id: otherMatterId } = await insertMatterFixture({
          client,
          matterTemplateId,
        });

        const { id: primaryContactId } = await selectPortalPerson({ client });
        const { id: userMatterId } = await insertMatterFixture({
          client,
          matterTemplateId,
          primaryContactId,
        });

        await startPortalSession(client);
        const { rows } = await client.query('select * from matters;');

        expect(JSON.stringify(rows)).toMatch(userMatterId);
        expect(JSON.stringify(rows)).not.toMatch(otherMatterId);
      })
    );
  });

  describe('a admin user', () => {
    it('can select all matters', () =>
      withRootDb(async (client: any) => {
        await client.query('DELETE FROM matters;');
        const {
          id: matterTemplateId
        } = await insertMatterTemplateFixture({ client });
        await insertMatterFixture({
          client,
          matterTemplateId,
        });
        await insertMatterFixture({
          client,
          matterTemplateId,
        });

        await startAdminSession(client);

        const { rows } = await client.query('select * from matters;');

        expect(rows).toHaveLength(2);
      })
    );
  });
});
