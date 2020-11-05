import {
  becomeAdminUser,
  becomeAnonymousUser,
  becomeLawyerUser,
  becomePortalUser,
  createFlashcard,
  withRootDb
} from '../../utils/dbHelpers';
import { describe, expect, it } from '@jest/globals';

describe('SELECT * FROM flashcard;', () => {
  describe('as an anonymous user', () => {
    it('can select flashcards', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomeAnonymousUser(pgClient);

        const { rows } = await pgClient.query('select * from flashcard;');
        expect(rows.length).toEqual(1);
      })
    );
  });

  describe('as an portal user', () => {
    it('can select flashcards', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomePortalUser(pgClient);

        const { rows } = await pgClient.query('select * from flashcard;');
        expect(rows.length).toEqual(1);
      })
    );
  });

  describe('as a lawyer user', () => {
    it('can select flashcards', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomeLawyerUser(pgClient);

        const { rows } = await pgClient.query('select * from flashcard;');
        expect(rows.length).toEqual(1);
      })
    );
  });

  describe('as an admin user', () => {
    it('can select flashcards', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomeAdminUser(pgClient);

        const { rows } = await pgClient.query('select * from flashcard;');
        expect(rows.length).toEqual(1);
      })
    );
  });
});
