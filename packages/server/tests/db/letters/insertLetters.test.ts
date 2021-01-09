import * as faker from 'faker';
import {
  becomeAnonymousUser,
  becomeLawyerUser,
  becomePortalUser,
  withRootDb
} from '../../utils/dbHelpers';
import { describe, expect, it } from '@jest/globals';

describe('INSERT INTO letter;', () => {
  const addressorId = faker.random.uuid();
  const addresseeId = faker.random.uuid();
  const lobIdentifier = faker.lorem.sentence();

  describe('as an anonymous user', () => {
    it('cannot create letters', () =>
      withRootDb(async (pgClient: any) => {
        await becomeAnonymousUser(pgClient);

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

  describe('as an portal user', () => {
    it('cannot create letters', () =>
      withRootDb(async (pgClient: any) => {
        await becomePortalUser(pgClient);

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

  describe('as an lawyer user', () => {
    it('cannot create letters', () =>
      withRootDb(async (pgClient: any) => {
        await becomeLawyerUser(pgClient);

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
