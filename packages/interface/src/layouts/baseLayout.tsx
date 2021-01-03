import { ChakraProvider, ColorModeProvider } from '@chakra-ui/core';
import React, { ReactChildren, useEffect } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { Background } from '../components/background';
import { BaseStyles } from '../styles/baseStyles';
import { ShortcutsModal } from '../components/shortcutsModal';
import { handleFirstTab } from '../utils/accessibility';

export const BaseLayout: React.FC<{
  children: ReactChildren;
  theme: any;
}> = ({ children, theme }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);

    return (): void => {
      window.removeEventListener('keydown', handleFirstTab);
    };
  }, []);

  return (
    <Auth0Provider
      clientId={process.env.GATSBY_AUTH0_CLIENT_ID as string}
      domain={process.env.GATSBY_AUTH0_DOMAIN as string}
      redirectUri={process.env.GATSBY_AUTH0_CALLBACK as string}
    >
      <ChakraProvider resetCSS theme={theme}>
        <BaseStyles />
        <ColorModeProvider options={{}}>
          <Background>{children}</Background>
        </ColorModeProvider>
        <ShortcutsModal />
      </ChakraProvider>
    </Auth0Provider>
  );
};
