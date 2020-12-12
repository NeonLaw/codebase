import {
  becomeAnonymousUser,
  becomeLawyerUser,
  becomePortalUser,
  createFlashcard,
  withRootDb
} from '../../utils/dbHelpers';
import { describe, expect, it } from '@jest/globals';

describe('INSERT INTO matter_template;', () => {
  describe('as an anonymous user', () => {
    it('cannot create matter_templates', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomeAnonymousUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO matter_template (name, javascript_module) '+
          'VALUES ($1, $2) RETURNING (id)',
          ['delete-your-data', 'deleteYourData']
        )).rejects.toThrow(
          /permission denied for table matter_template/
        );
      })
    );
  });

  describe('as an portal user', () => {
    it('cannot create matter_templates', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomePortalUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO matter_template (name, javascript_module) '+
          'VALUES ($1, $2) RETURNING (id)',
          ['delete-your-data', 'deleteYourData']
        )).rejects.toThrow(
          /permission denied for table matter_template/
        );
      })
    );
  });

  describe('as an lawyer user', () => {
    it('cannot create matter_templates', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomeLawyerUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO matter_template (name, javascript_module) '+
          'VALUES ($1, $2) RETURNING (id)',
          ['delete-your-data', 'deleteYourData']
        )).rejects.toThrow(
          /permission denied for table matter_template/
        );
      })
    );
  });
});
