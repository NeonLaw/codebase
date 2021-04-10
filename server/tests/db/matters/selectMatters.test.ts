import * as faker from 'faker';
import { describe, expect, it } from '@jest/globals';
import {
  insertMatterFixture,
  insertMatterTemplateFixture,
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

        await expect(client.query('select * from matter;')).rejects.toThrow(
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
        await insertMatterFixture({
          client,
          matterTemplateId,
        });

        const email = faker.internet.email();
        const { id: primaryContactId } = await startPortalSession(
          client,
          email
        );
        const userMatterRow = await insertMatterFixture({
          client,
          matterTemplateId,
          primaryContactId,
        });

        const { rows } = await client.query('select * from matter;');

        expect(rows).toHaveLength(1);
        expect(userMatterRow.id).toEqual(rows[0].id);
      })
    );
  });

  describe('a admin user', () => {
    it('can select all matters', () =>
      withRootDb(async (client: any) => {
        await client.query('DELETE FROM matter;');
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

        const { rows } = await client.query('select * from matter;');

        expect(rows).toHaveLength(2);
      })
    );
  });
});
