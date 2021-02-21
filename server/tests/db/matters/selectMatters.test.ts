import * as faker from 'faker';
import {
  insertMatterFixture,
  insertMatterTemplateFixture,
  startAdminSession,
  startAnonymousSession,
  startPortalSession,
  withRootDb
} from '../../utils/dbHelpers';
import { describe, expect, it } from '@jest/globals';

describe('SELECT * FROM matter;', () => {
  describe('an anonymous user', () => {
    it('cannot select matters', () =>
      withRootDb(async (pgClient: any) => {
        await startAnonymousSession(pgClient);

        await expect(pgClient.query('select * from matter;')).rejects.toThrow(
          /permission denied for table matter/
        );
      })
    );
  });

  describe('a portal user', () => {
    it('can only select matters where they are the primary contact', () =>
      withRootDb(async (pgClient: any) => {
        const {
          id: matterTemplateId
        } = await insertMatterTemplateFixture(pgClient);
        await insertMatterFixture({
          client: pgClient,
          matterTemplateId,
        });

        const email = faker.internet.email();
        const { id: primaryContactId } = await startPortalSession(
          pgClient,
          email
        );
        const userMatterRow = await insertMatterFixture({
          client: pgClient,
          matterTemplateId,
          primaryContactId,
        });

        const { rows } = await pgClient.query('select * from matter;');

        expect(rows).toHaveLength(1);
        expect(userMatterRow).toMatch(rows[0].id);
      })
    );
  });

  describe('a admin user', () => {
    it('can select all matters', () =>
      withRootDb(async (pgClient: any) => {
        await pgClient.query('DELETE FROM matter;');
        const {
          id: matterTemplateId
        } = await insertMatterTemplateFixture(pgClient);
        await insertMatterFixture({
          client: pgClient,
          matterTemplateId,
        });
        await insertMatterFixture({
          client: pgClient,
          matterTemplateId,
        });

        await startAdminSession(pgClient);

        const { rows } = await pgClient.query('select * from matter;');

        expect(rows).toHaveLength(2);
      })
    );
  });
});
