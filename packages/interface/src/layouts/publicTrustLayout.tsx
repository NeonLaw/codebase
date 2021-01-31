import '../themes/fonts.css';
import { Box, useColorMode } from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { colors } from '../themes/deleteYourData';
import { getApolloClient } from '../utils/getApolloClient';
import { useAuth0 } from '@auth0/auth0-react';

export const PublicTrustLayout = ({ children }) => {
  const { colorMode } = useColorMode();
  const { getAccessTokenSilently } = useAuth0();
  const apolloClient = getApolloClient(getAccessTokenSilently);

  return (
    <>
      <ApolloProvider client={apolloClient}>
        <>
          <Box color={colorMode === 'dark' ? colors.white : ''}>
            {children}
          </Box>
        </>
      </ApolloProvider>
    </>
  );
};
