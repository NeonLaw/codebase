import '../styles/globals.css';

import { ApolloProvider } from '@apollo/client';
import { BaseStyles } from '../styles/baseStyles';
import { ChakraProvider } from '@chakra-ui/react';
import { GetLayoutDirection } from '../../utils/getLayoutDirection';
import Head from 'next/head';
import { ShortcutsModal } from '../components/shortcuts-modal';
import { UserProvider } from '@auth0/nextjs-auth0';
import { getApolloClient } from '../utils/getApolloClient';
import { handleFirstTab } from '../utils/accessibility';
import nextIntlConfig from '../intl';
import { theme } from '../styles/neonLaw';
import { useEffect } from 'react';
import { withNextIntlSetup } from '@moxy/next-intl';

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
            <meta name="viewport" />
          </Head>
          <BaseStyles dir={GetLayoutDirection()} />
          <ShortcutsModal />
          <Component {...pageProps} />
        </ApolloProvider>
      </ChakraProvider>
    </UserProvider>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default withNextIntlSetup(nextIntlConfig)(NeonLawApp);
