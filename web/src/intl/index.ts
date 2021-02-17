import {
  acceptLanguagePolicy,
  cookiePolicy,
  defaultPolicy
} from '@moxy/next-intl';

/* eslint-disable-next-line */
export default {
  locales: [
    {
      id: 'en',
      loadMessages: async () => {
        const module = await import('./en.json');

        return module.default;
      },
      name: 'English',
    },
  ],
  policies: [
    cookiePolicy(),
    acceptLanguagePolicy(),
    defaultPolicy('en'),
  ],
};
