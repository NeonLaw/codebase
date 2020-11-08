
import * as faker from 'faker';
import {
  becomeAnonymousUser,
  becomeLawyerUser,
  becomePortalUser,
  createFlashcard,
  withRootDb
} from '../../utils/dbHelpers';
import { describe, expect, it } from '@jest/globals';

describe('INSERT INTO letter;', () => {
  const addressorId = faker.random.uuid();
  const addresseeId = faker.random.uuid();
  const documentId = faker.random.uuid();
  const lobRecord = JSON.stringify({ body: faker.lorem.paragraph() });
  const lobIdentifier = faker.lorem.sentence();

  describe('as an anonymous user', () => {
    it('cannot create letters', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomeAnonymousUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO letter (addressor_id, addressee_id, '+
          'lob_identifier, document_id, lob_record) ' +
          'VALUES ($1, $2, $3, $4, $5) RETURNING (id)',
          [addressorId, addresseeId, lobIdentifier, documentId, lobRecord]
        )).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });

  describe('as an portal user', () => {
    it('cannot create letters', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomePortalUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO letter (addressor_id, addressee_id, '+
          'lob_identifier, document_id, lob_record) ' +
          'VALUES ($1, $2, $3, $4, $5) RETURNING (id)',
          [addressorId, addresseeId, lobIdentifier, documentId, lobRecord]
        )).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });

  describe('as an lawyer user', () => {
    it('cannot create letters', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomeLawyerUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO letter (addressor_id, addressee_id, '+
          'lob_identifier, document_id, lob_record) ' +
          'VALUES ($1, $2, $3, $4, $5) RETURNING (id)',
          [addressorId, addresseeId, lobIdentifier, documentId, lobRecord]
        )).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });
});
