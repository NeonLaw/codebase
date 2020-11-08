import {
  becomeAnonymousUser,
  createFlashcard,
  withRootDb
} from '../../utils/dbHelpers';
import { describe, expect, it } from '@jest/globals';

describe('SELECT find_or_create_letters_by_lob_identifier', () => {
  const lobJson = JSON.stringify([{hello: 'yes'}]);
  describe('as an anonymous user', () => {
    it('cannot create letters', () =>
      withRootDb(async (pgClient: any) => {
        await createFlashcard(pgClient);

        await becomeAnonymousUser(pgClient);

        await expect(pgClient.query(
          'SELECT find_or_create_letters_by_lob_identifier($1)',
          [lobJson]
        )).rejects.toThrow(
          /permission denied for table letter/
        );
      })
    );
  });
});
