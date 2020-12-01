import '@neonlaw/shared-ui/src/themes/fonts.css';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/core';
import { BaseStyles } from '../styles/base';
import { Footer } from '@neonlaw/shared-ui/src/components/footer';
import React from 'react';
import { theme } from '@neonlaw/shared-ui/src/themes/neonLaw';

const IndexLayout = ({ children }) => (
  <ChakraProvider resetCSS theme={theme}>
    <BaseStyles />
    <ColorModeProvider options={{}}>
      <>
        {children}
        <Footer isWhite={false} currentSite="delete-your-data" />
      </>
    </ColorModeProvider>
  </ChakraProvider>
);

export default IndexLayout;
