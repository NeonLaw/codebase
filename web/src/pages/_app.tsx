import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0';
import nextIntlConfig from '../intl';
import { theme } from '../styles/neonLaw';
import { withNextIntlSetup } from '@moxy/next-intl';

const NeonLawApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <ChakraProvider theme={theme}>
        <>
          <Head>
            <meta
              name="viewport"
            />
          </Head>
          <Component {...pageProps} />
        </>
      </ChakraProvider>
    </UserProvider>
  );
};

/* eslint-disable-next-line */
export default  withNextIntlSetup(nextIntlConfig)(NeonLawApp);
