import {
  CSSReset,
  ColorModeProvider,
  ThemeProvider
} from '@chakra-ui/core';
import { AuthenticationProvider } from '@utils/authenticationContext';
import { Background } from '@components/background';
import { MDXComponents } from '@utils/mdxComponents';
import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import { Seo } from '@components/seo';
import { theme } from '@themes/neonLaw';

export const BaseLayout: React.FC = ({ children }) => {
  return (
    <AuthenticationProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Seo />
        <ColorModeProvider>
          <MDXProvider components={MDXComponents}>
            <Background>
              {children}
            </Background>
          </MDXProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </AuthenticationProvider>
  );
};

