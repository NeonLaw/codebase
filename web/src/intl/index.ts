import { acceptLanguagePolicy, cookiePolicy, defaultPolicy } from '@moxy/next-intl';

export default {
    locales: [
        {
            id: 'en',
            name: 'English',
            loadMessages: async () => {
                // @ts-ignore
                const module = await import(/* webpackChunkName: "intl-messages/en-US" */ './en.json');

                return module.default;
            },
        },
    ],
    policies: [
        cookiePolicy(),
        acceptLanguagePolicy(),
        defaultPolicy('en'),
    ],
};