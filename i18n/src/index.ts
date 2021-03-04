import * as fs from 'fs';
import * as yaml from 'js-yaml';

export const flattenMessages = ((nestedMessages = {}, prefix = ''): any => {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value       = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
});

export const createFlattenedJson = (locale): any => {
  let translations = {};

  fs.readdirSync(`${__dirname}/translations/${locale}/`).forEach((file) => {
    const jsonTranslation = yaml.load(
      fs.readFileSync(
        `${__dirname}/translations/${locale}/${file}`,
        {encoding: 'utf-8'}
      )
    );

    translations = Object.assign(jsonTranslation, translations);
  });

  const flattenedMessages = flattenMessages(translations);

  fs.writeFileSync(
    `${__dirname}/locales/${locale}.json`,
    JSON.stringify(flattenedMessages)
  );

  return JSON.stringify(flattenedMessages);
};

export const locales = [
  'en-US',
  'es-419',
  'ur'
];

export const createLocales = async () => {
  await locales.forEach(async locale => await createFlattenedJson(locale));
};
