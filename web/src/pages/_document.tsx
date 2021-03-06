import Document, { Head, Html, Main, NextScript } from 'next/document';

import { ColorModeScript } from '@chakra-ui/react';
import { NextIntlScript } from '@moxy/next-intl';
import { theme } from '../styles/neonLaw';

const APP_NAME = 'Neon Law';
const APP_DESCRIPTION =
  'A progressive tech-infused law firm dedicated to access to justice';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const zendeskKey = '81e26970-baa7-4b83-a913-984711a0b5f1';

    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />

          {/* add your own app-icon */}
          {/* <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />*/}
          <link rel="shortcut icon" href="/images/logo.png" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/earlyaccess/notonaskharabic.css"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <NextIntlScript />
          <Main />
          <NextScript />
          {process.env.NEXT_PUBLIC_API_URI !==
            'https://api.neonlaw.com/graphql' && (
            <script
              id="ze-snippet"
              key="zendesk"
              src={
                `https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`
              }
            />
          )}
        </body>
      </Html>
    );
  }
}

/* eslint-disable-next-line */
export default MyDocument;
