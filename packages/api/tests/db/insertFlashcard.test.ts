
import * as faker from 'faker';
import {
  becomeAdminUser,
  becomeAnonymousUser,
  becomeLawyerUser,
  becomePortalUser,
  createFlashcard,
  withRootDb
} from '../utils/dbHelpers';
import { describe, expect, it } from '@jest/globals';

describe('INSERT INTO flashcard (topic, answer, prompt) VALUES ();', () => {
  const answer = faker.lorem.paragraph();
  const prompt = faker.lorem.sentence();
  const topic = 'wills-and-trusts';

  describe('as an anonymous user', () => {
    it('cannot create flashcards', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomeAnonymousUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO flashcard (answer, prompt, topic) ' +
          'VALUES ($1, $2, $3) RETURNING (id, answer, prompt)',
          [answer, prompt, topic]
        )).rejects.toThrow(
          /permission denied for table flashcard/
        );
      })
    );
  });

  describe('as an portal user', () => {
    it('cannot create flashcards', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomePortalUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO flashcard (answer, prompt, topic) ' +
          'VALUES ($1, $2, $3) RETURNING (id, answer, prompt)',
          [answer, prompt, topic]
        )).rejects.toThrow(
          /permission denied for table flashcard/
        );
      })
    );
  });

  describe('as a lawyer user', () => {
    it('cannot create flashcards', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomeLawyerUser(pgClient);

        await expect(pgClient.query(
          'INSERT INTO flashcard (answer, prompt, topic) ' +
          'VALUES ($1, $2, $3) RETURNING (id, answer, prompt)',
          [answer, prompt, topic]
        )).rejects.toThrow(
          /permission denied for table flashcard/
        );
      })
    );
  });

  describe('as an admin user', () => {
    it('can create flashcards', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomeAdminUser(pgClient);

        const { rows } = await pgClient.query(
          'INSERT INTO flashcard (answer, prompt, topic) ' +
          'VALUES ($1, $2, $3) RETURNING (id, answer, prompt, topic)',
          [answer, prompt, topic]
        );

        expect(rows.length).toEqual(1);

        const insertResponse = rows[0].row;

        expect(insertResponse).toMatch(prompt);
        expect(insertResponse).toMatch(answer);
        expect(insertResponse).toMatch(topic);
      })
    );
  });
});
