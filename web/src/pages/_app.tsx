import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

import customTheme from '../styles/customTheme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={customTheme}>
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
export default MyApp;
