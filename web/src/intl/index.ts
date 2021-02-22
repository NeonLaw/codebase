import {
  acceptLanguagePolicy,
  cookiePolicy,
  defaultPolicy
} from '@moxy/next-intl';

/* eslint-disable-next-line */
export default {
  locales: [
    {
      id: 'en-US',
      loadMessages: async () => {
        const module = await import('./messages/en-US.json');

        return module.default;
      },
      name: 'English',
    },
  ],
  policies: [
    cookiePolicy(),
    acceptLanguagePolicy(),
    defaultPolicy('en-US'),
  ],
};
