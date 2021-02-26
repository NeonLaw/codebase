import { Box, useColorMode } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { TrustFooter } from '../footer/trustFooter';
import { colors } from '../../styles/neonLaw';
import { getApolloClient } from '../../utils/getApolloClient';

export const PublicTrustLayout = ({ children }) => {
  const { colorMode } = useColorMode();
  const apolloClient = getApolloClient();

  return (
    <>
      <Box
        bg={colors.background[colorMode]}
        color={colors.text[colorMode]}
        paddingBottom="2em"
      >
        <ApolloProvider client={apolloClient}>
          {children}
        </ApolloProvider>
      </Box>
      <TrustFooter />
    </>
  );
};
