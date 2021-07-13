import '../styles/globals.css';
import { getIntlProps, withIntlApp } from '@moxy/next-intl';
import { ApolloProvider } from '@apollo/client';
import App from 'next/app';
import { BaseStyles } from '../styles/baseStyles';
import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { GetLayoutDirection } from '../../utils/getLayoutDirection';
import Head from 'next/head';
import { ShortcutsModal } from '../components/shortcuts-modal';
import { UserProvider } from '@auth0/nextjs-auth0';
import { getApolloClient } from '../utils/getApolloClient';
import { globalStyles } from '../styles/globalStyles';
import { handleFirstTab } from '../utils/accessibility';
import nextIntlConfig from '../intl';
import { theme } from '../styles/neonLaw';
import { useEffect } from 'react';

const NeonLawApp = (props) => {
  const { Component, pageProps } = props;
  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);

    return (): void => {
      window.removeEventListener('keydown', handleFirstTab);
    };
  }, []);
  const apolloClient = getApolloClient();
  const appTheme = Object.assign(theme, globalStyles);

  return (
    <UserProvider>
      <ChakraProvider theme={appTheme}>
        <ApolloProvider client={apolloClient}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <DefaultSeo canonical="https://www.neonlaw.com" />
          <BaseStyles dir={GetLayoutDirection()} />
          <ShortcutsModal />
          <App {...props} />
        </ApolloProvider>
      </ChakraProvider>
    </UserProvider>
  );
};
const loadLocale = async (locale) => {
  const module = await import(`@neonlaw/i18n/src/locales/${locale}.json`);
  return module.default;
};

NeonLawApp.getInitialProps = async (appCtx) => {
  const [intlProps, appProps] = await Promise.all([
    getIntlProps(appCtx.router.locale),
    App.getInitialProps(appCtx),
  ]);

  return {
    ...intlProps,
    ...appProps,
  };
};
/* eslint-disable-next-line import/no-default-export */
export default withIntlApp(loadLocale)(NeonLawApp);
