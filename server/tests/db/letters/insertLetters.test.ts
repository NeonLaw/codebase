import * as faker from 'faker';
import { describe, expect, it } from '@jest/globals';
import {
  startAnonymousSession,
  startLawyerSession,
  startPortalSession,
  withRootDb
} from '../../utils/dbHelpers';

describe('INSERT INTO letter;', () => {
  const addressorId = faker.random.uuid();
  const addresseeId = faker.random.uuid();
  const lobIdentifier = faker.lorem.sentence();

  describe('an anonymous user', () => {
    it('cannot create letters', () =>
      withRootDb(async (pgClient: any) => {
        await startAnonymousSession(pgClient);

        await expect(pgClient.query(
          'INSERT INTO letter (addressor_id, addressee_id, '+
          'lob_identifier) ' +
          'VALUES ($1, $2, $3) RETURNING (id)',
          [addressorId, addresseeId, lobIdentifier]
        )).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });

  describe('a portal user', () => {
    it('cannot create letters', () =>
      withRootDb(async (pgClient: any) => {
        await startPortalSession(pgClient);

        await expect(pgClient.query(
          'INSERT INTO letter (addressor_id, addressee_id, '+
          'lob_identifier) ' +
          'VALUES ($1, $2, $3) RETURNING (id)',
          [addressorId, addresseeId, lobIdentifier]
        )).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });

  describe('a lawyer user', () => {
    it('cannot create letters', () =>
      withRootDb(async (pgClient: any) => {
        await startLawyerSession(pgClient);

        await expect(pgClient.query(
          'INSERT INTO letter (addressor_id, addressee_id, '+
          'lob_identifier) ' +
          'VALUES ($1, $2, $3) RETURNING (id)',
          [addressorId, addresseeId, lobIdentifier]
        )).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });
});
