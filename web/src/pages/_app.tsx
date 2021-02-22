import '../styles/globals.css';

import { BaseStyles } from '../styles/baseStyles';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { ShortcutsModal } from '../components/shortcuts-modal';
import { UserProvider } from '@auth0/nextjs-auth0';
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

  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <>
          <Head>
            <meta
              name="viewport"
            />
          </Head>
          <BaseStyles />
          <ShortcutsModal />
          <Component {...pageProps} />
        </>
      </ChakraProvider>
    </UserProvider>
  );
};

/* eslint-disable-next-line */
export default withNextIntlSetup(nextIntlConfig)(NeonLawApp);
