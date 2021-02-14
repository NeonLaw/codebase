import {
  becomeAnonymousUser,
  becomeLawyerUser,
  becomePortalUser,
  withRootDb
} from '../../utils/dbHelpers';
import { describe, expect, it } from '@jest/globals';

describe('INSERT INTO matter_document_template;', () => {
  describe('as an anonymous user', () => {
    it('cannot create document_templates', () =>
      withRootDb(async (pgClient: any) => {
        await becomeAnonymousUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO matter_document_template (name, description) '+
          'VALUES ($1, $2) RETURNING (id)',
          ['delete-your-data', 'deleteYourData']
        )).rejects.toThrow(
          /permission denied for table matter_document_template/
        );
      })
    );
  });

  describe('as an portal user', () => {
    it('cannot create document_templates', () =>
      withRootDb(async (pgClient: any) => {
        await becomePortalUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO matter_document_template (name, description) '+
          'VALUES ($1, $2) RETURNING (id)',
          ['delete-your-data', 'deleteYourData']
        )).rejects.toThrow(
          /permission denied for table matter_document_template/
        );
      })
    );
  });

  describe('as an lawyer user', () => {
    it('cannot create document_templates', () =>
      withRootDb(async (pgClient: any) => {
        await becomeLawyerUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO matter_document_template (name, description) '+
          'VALUES ($1, $2) RETURNING (id)',
          ['delete-your-data', 'deleteYourData']
        )).rejects.toThrow(
          /permission denied for table matter_document_template/
        );
      })
    );
  });
});
