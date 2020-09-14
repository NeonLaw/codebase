import { ChakraProvider, ColorModeProvider } from '@chakra-ui/core';
import React, { ReactChildren, useEffect } from 'react';

import { AuthenticationProvider } from '../utils/authenticationContext';
import { Background } from '../components/background';
import BaseStyles from '../styles/base';
import ShortcutsModal from '../components/shortcuts-modal';
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
      <ChakraProvider resetCSS theme={theme}>
        <BaseStyles />
        <ColorModeProvider>
          <Background>{children}</Background>
        </ColorModeProvider>
        <ShortcutsModal />
      </ChakraProvider>
    </AuthenticationProvider>
  );
};
