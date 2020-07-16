import { CSSReset, ColorModeProvider, ThemeProvider } from '@chakra-ui/core';
import React, { ReactChildren, useEffect } from 'react';

import { AuthenticationProvider } from '../utils/authenticationContext';
import { Background } from '../components/background';
import BaseStyles from '../styles/base';
import { Helmet } from 'react-helmet';
import { handleFirstTab } from '../utils/accessibility';
import { theme } from '../themes/neonLaw';

export const BaseLayout: React.FC<{
  children: ReactChildren;
}> = ({ children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);

    return (): void => {
      window.removeEventListener('keydown', handleFirstTab);
    };
  }, []);

  return (
    <AuthenticationProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Helmet>
          <link href="/fonts/fonts/font.css" rel="stylesheet" />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <BaseStyles />
        <ColorModeProvider>
          <Background>{children}</Background>
        </ColorModeProvider>
      </ThemeProvider>
    </AuthenticationProvider>
  );
};
