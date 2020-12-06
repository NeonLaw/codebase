import * as faker from 'faker';
import {
  becomeAdminUser,
  becomeAnonymousUser,
  becomePortalUser,
  createMatter,
  createMatterTemplate,
  withRootDb
} from '../../utils/dbHelpers';
import { describe, expect, it } from '@jest/globals';

describe('SELECT * FROM matter;', () => {
  describe('as an anonymous user', () => {
    it('cannot select matters', () =>
      withRootDb(async (pgClient: any) => {
        await becomeAnonymousUser(pgClient);

        await expect(pgClient.query('select * from matter;')).rejects.toThrow(
          /permission denied for table matter/
        );
      })
    );
  });

  describe('as an portal user', () => {
    it('can only select matters where they are the primary contact', () =>
      withRootDb(async (pgClient: any) => {
        const { id: matterTemplateId } = await createMatterTemplate(pgClient);
        await createMatter({
          client: pgClient,
          matterTemplateId,
        });

        const email = faker.internet.email();
        const { id: primaryContactId } = await becomePortalUser(
          pgClient,
          email
        );
        const userMatterRow = await createMatter({
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

  describe('as an admin user', () => {
    it('can select all matters', () =>
      withRootDb(async (pgClient: any) => {
        const { id: matterTemplateId } = await createMatterTemplate(pgClient);
        await createMatter({
          client: pgClient,
          matterTemplateId,
        });
        await createMatter({
          client: pgClient,
          matterTemplateId,
        });

        await becomeAdminUser(pgClient);

        const { rows } = await pgClient.query('select * from matter;');

        expect(rows).toHaveLength(2);
      })
    );
  });
});
