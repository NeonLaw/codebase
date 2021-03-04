import * as fs from 'fs';
import { createFlattenedJson, locales } from '../src/index';
import { describe, expect, it } from '@jest/globals';

describe('Locales files', () => {
  it('are the flattened version of the translation YAML files', async () => {
    locales.forEach((locale) => {
      const json = fs.readFileSync(
        `${__dirname}/../src/locales/${locale}.json`,
        { encoding: 'utf-8' }
      );

      const localeJson = createFlattenedJson(locale);

      expect(json).toEqual(localeJson);
    });
  });
});
