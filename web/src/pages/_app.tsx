import '../styles/globals.css';
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Router from 'next/router';
import nextIntlConfig from '../intl';
import { theme } from '../styles/neonLaw';
import { withNextIntlSetup } from '@moxy/next-intl';

const onRedirectCallback = (appState) => {
  return Router.push(appState?.returnTo || '/');
};


const NeonLawApp = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID as string}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN as string}
      redirectUri={process.env.NEXT_PUBLIC_SITE_URL as string}
      onRedirectCallback={onRedirectCallback}
      scope='openid profile email'
      audience="https://www.neonlaw.com/api"
      cacheLocation="localstorage"
    >
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
    </Auth0Provider>
  );
};

/* eslint-disable-next-line */
export default  withNextIntlSetup(nextIntlConfig)(NeonLawApp);
