import { describe, expect, it } from '@jest/globals';
import {
  startAnonymousSession,
  startLawyerSession,
  startPortalSession,
  withRootDb
} from '../../utils/dbHelpers';

describe('INSERT INTO matter_template;', () => {
  describe('an anonymous user', () => {
    it('cannot create matter_templates', () =>
      withRootDb(async (pgClient: any) => {
        await startAnonymousSession(pgClient);

        await expect(pgClient.query(
          'INSERT INTO matter_template (name, description) '+
          'VALUES ($1, $2) RETURNING (id)',
          ['delete-your-data', '{ deleteYourData: "deleteYourData"}']
        )).rejects.toThrow(
          /permission denied for table matter_template/
        );
      })
    );
  });

  describe('a portal user', () => {
    it('cannot create matter_templates', () =>
      withRootDb(async (pgClient: any) => {
        await startPortalSession(pgClient);

        await expect(pgClient.query(
          'INSERT INTO matter_template (name, description) '+
          'VALUES ($1, $2) RETURNING (id)',
          ['delete-your-data', '{ deleteYourData: "deleteYourData"}']
        )).rejects.toThrow(
          /permission denied for table matter_template/
        );
      })
    );
  });

  describe('a lawyer user', () => {
    it('cannot create matter_templates', () =>
      withRootDb(async (pgClient: any) => {
        await startLawyerSession(pgClient);

        await expect(pgClient.query(
          'INSERT INTO matter_template (name, description) '+
          'VALUES ($1, $2) RETURNING (id)',
          ['delete-your-data', '{ deleteYourData: "deleteYourData"}']
        )).rejects.toThrow(
          /permission denied for table matter_template/
        );
      })
    );
  });
});
