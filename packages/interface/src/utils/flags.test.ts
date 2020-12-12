import { describe, expect, it } from '@jest/globals';
import { flags } from './flags';

describe('util flags util function', () => {
  describe('given a user flag string', () => {
    it('merges the default settings with the user flag one', () => {
      const userFlagsString = 'EATS_CHOCOLATE';

      expect(flags(userFlagsString)).toEqual({
        'ACCESSIBLE_BUTTONS': true,
        'EATS_CHOCOLATE': true,
      });
    });
  });
});
