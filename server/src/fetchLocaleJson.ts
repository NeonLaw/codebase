import * as fs from 'fs';
import * as yaml from 'js-yaml';

const flattenMessages = ((nestedMessages, prefix = '') => {
  if (nestedMessages === null) {
    return {};
  }
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

  return flattenMessages(translations);
};
