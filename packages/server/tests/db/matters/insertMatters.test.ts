import * as faker from 'faker';
import {
  becomeAdminUser,
  becomeAnonymousUser,
  becomeLawyerUser,
  becomePortalUser,
  withRootDb
} from '../../utils/dbHelpers';
import { describe, expect, it } from '@jest/globals';

describe('INSERT INTO matter;', () => {
  const randomId = faker.random.uuid();

  describe('as an anonymous user', () => {
    it('cannot create matters', () =>
      withRootDb(async (pgClient: any) => {
        await becomeAnonymousUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO matter (name, primary_contact_id, '+
          'matter_template_id) VALUES ($1, $2, $3) RETURNING (id)',
          ['a', randomId, randomId]
        )).rejects.toThrow(
          /permission denied for table matter/
        );
      })
    );
  });

  describe('as an portal user', () => {
    it('cannot create matters', () =>
      withRootDb(async (pgClient: any) => {
        await becomePortalUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO matter (name, primary_contact_id, '+
          'matter_template_id) VALUES ($1, $2, $3) RETURNING (id)',
          ['a', randomId, randomId]
        )).rejects.not.toThrow(
          /permission denied for table matter/
        );
      })
    );
  });

  describe('as a lawyer user', () => {
    it('can create matters', () =>
      withRootDb(async (pgClient: any) => {
        const { rows: matterTemplateRows } = await pgClient.query(
          'INSERT INTO matter_template (name, javascript_module) '+
          'VALUES ($1, $2) RETURNING (id)',
          ['delete-your-data', 'deleteYourData']
        );
        const matterTemplateId = matterTemplateRows[0].id;

        const { rows: primaryContactRows } = await pgClient.query(
          'INSERT INTO person (email, role, sub) ' +
          'VALUES ($1, $2, $3) RETURNING (id)',
          ['example-contact@neonlaw.com', 'portal', 'portal-sub']
        );
        const primaryContactId = primaryContactRows[0].id;

        await becomeLawyerUser(pgClient);

        const { rows } = await pgClient.query(
          'INSERT INTO matter (name, primary_contact_id, ' +
          'matter_template_id) VALUES ($1, $2, $3) ' +
          'RETURNING (id, primary_contact_id, matter_template_id)',
          ['a', primaryContactId, matterTemplateId]
        );

        expect(rows.length).toEqual(1);

        const insertResponse = rows[0].row;

        expect(insertResponse).toMatch(primaryContactId);
        expect(insertResponse).toMatch(matterTemplateId);
      })
    );
  });

  describe('as a admin user', () => {
    it('can create matters', () =>
      withRootDb(async (pgClient: any) => {
        await becomeAdminUser(pgClient);

        const { rows: matterTemplateRows } = await pgClient.query(
          'INSERT INTO matter_template (name, javascript_module) '+
          'VALUES ($1, $2) RETURNING (id)',
          ['delete-your-data', 'deleteYourData']
        );
        const matterTemplateId = matterTemplateRows[0].id;

        const { rows: primaryContactRows } = await pgClient.query(
          'INSERT INTO person (email, role, sub) ' +
          'VALUES ($1, $2, $3) RETURNING (id)',
          ['example-contact@neonlaw.com', 'portal', 'portal-sub']
        );
        const primaryContactId = primaryContactRows[0].id;

        const { rows } = await pgClient.query(
          'INSERT INTO matter (name, primary_contact_id, '+
          'matter_template_id) VALUES ($1, $2, $3) '+
          'RETURNING (id, primary_contact_id, matter_template_id)',
          ['a', primaryContactId, matterTemplateId]
        );

        expect(rows.length).toEqual(1);

        const insertResponse = rows[0].row;

        expect(insertResponse).toMatch(primaryContactId);
        expect(insertResponse).toMatch(matterTemplateId);
      })
    );
  });
});
