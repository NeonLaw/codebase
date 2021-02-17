import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import nextIntlConfig from '../intl';
import { theme } from '../styles/neonLaw';
import { withNextIntlSetup } from '@moxy/next-intl';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

/* eslint-disable-next-line */
export default  withNextIntlSetup(nextIntlConfig)(MyApp);
