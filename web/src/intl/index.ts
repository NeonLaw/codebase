import {
  acceptLanguagePolicy,
  cookiePolicy,
  defaultPolicy
} from '@moxy/next-intl';

const locales = [
  {
    id: 'en-US',
    loadMessages: async () => {
      return await import('@neonlaw/i18n/src/locales/en-US.json');
    },
    name: 'English',
  },
  {
    id: 'es-419',
    loadMessages: async () => {
      return await import('@neonlaw/i18n/src/locales/es-419.json');
    },
    name: 'Spanish (Latin America)',
  },
  {
    id: 'ur',
    loadMessages: async () => {
      return await import('@neonlaw/i18n/src/locales/ur.json');
    },
    name: 'Urdu',
  },
];
const policies = [
  cookiePolicy(),
  acceptLanguagePolicy(),
  defaultPolicy('en-US'),
];

/* eslint-disable-next-line */
export default { locales, policies }
