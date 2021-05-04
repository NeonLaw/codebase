import '../styles/globals.css';

import { getIntlProps, withIntlApp } from '@moxy/next-intl';
import { ApolloProvider } from '@apollo/client';
import App from 'next/app';
import { BaseStyles } from '../styles/baseStyles';
import { ChakraProvider } from '@chakra-ui/react';
import { GetLayoutDirection } from '../../utils/getLayoutDirection';
import Head from 'next/head';
import { ShortcutsModal } from '../components/shortcuts-modal';
import { UserProvider } from '@auth0/nextjs-auth0';
import { getApolloClient } from '../utils/getApolloClient';
import { handleFirstTab } from '../utils/accessibility';
import { theme } from '../styles/neonLaw';
import { useEffect } from 'react';

const NeonLawApp = ({ Component, pageProps }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);

    return (): void => {
      window.removeEventListener('keydown', handleFirstTab);
    };
  }, []);
  const apolloClient = getApolloClient();

  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <BaseStyles dir={GetLayoutDirection()} />
          <ShortcutsModal />
          <Component {...pageProps} />
        </ApolloProvider>
      </ChakraProvider>
    </UserProvider>
  );
};

NeonLawApp.getInitialProps = async (appCtx) => {
  appCtx.ctx.locale = appCtx.router.locale;
  appCtx.ctx.locales = appCtx.router.locales;
  appCtx.ctx.defaultLocale = appCtx.router.defaultLocale;

  const [intlProps, appProps] = await Promise.all([
    getIntlProps(appCtx.router.locale),
    App.getInitialProps(appCtx),
  ]);

  return {
    ...appProps,
    ...intlProps,
  };
};

const loadLocale = async (locale) => {
  const module = await import(`../intl/${locale}.json`);

  return module.default;
};

/* eslint-disable-next-line import/no-default-export */
export default withIntlApp(loadLocale)(NeonLawApp);
