import * as fs from 'fs';
import * as yaml from 'js-yaml';

export const fetchLocaleJson = (locale: 'en' | 'es') => {
  let translations = {};

  fs.readdirSync(`${__dirname}/locales/${locale}`).forEach((file) => {
    const jsonTranslation = yaml.load(
      fs.readFileSync(
        `${__dirname}/locales/${locale}/${file}`,
        {encoding: 'utf-8'}
      )
    );

    translations = Object.assign(jsonTranslation, translations);
  });

  return translations;
};
