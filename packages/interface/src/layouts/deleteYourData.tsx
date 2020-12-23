import '../themes/fonts.css';

import {
  AuthenticationContext,
  publicClient
} from '../utils/authenticationContext';
import { Box, useColorMode } from '@chakra-ui/core';

import { ApolloProvider } from '@apollo/client';
import { DeleteYourDataStyles } from '../styles/deleteYourData';
import { Footer } from '../components/footer';
import React from 'react';
import { colors } from '../themes/deleteYourData';

export const DeleteYourDataLayout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <DeleteYourDataStyles />
      <AuthenticationContext.Consumer>
        {({ isLoading, apolloClient }) => {
          return (
            <ApolloProvider client={isLoading ? publicClient : apolloClient}>
              <>
                <Box color={colorMode === 'dark' ? colors.white : ''}>
                  {children}
                </Box>
                <Footer isWhite={true} />
              </>
            </ApolloProvider>
          );}}
      </AuthenticationContext.Consumer>
    </>
  );
};
