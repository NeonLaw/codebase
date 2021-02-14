import '../themes/fonts.css';
import { Box, useColorMode } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { BaseFooter } from '../components/footer/baseFooter';
import { DeleteYourDataStyles } from '../styles/deleteYourDataStyles';
import React from 'react';
import { colors } from '../themes/deleteYourData';
import { getApolloClient } from '../utils/getApolloClient';
import { useAuth0 } from '@auth0/auth0-react';

export const DeleteYourDataLayout = ({ children }) => {
  const { colorMode } = useColorMode();
  const { getAccessTokenSilently } = useAuth0();
  const apolloClient = getApolloClient(getAccessTokenSilently);

  return (
    <>
      <DeleteYourDataStyles />
      <ApolloProvider client={apolloClient}>
        <>
          <Box color={colorMode === 'dark' ? colors.white : ''}>
            {children}
          </Box>
          <BaseFooter isWhite={true} />
        </>
      </ApolloProvider>
    </>
  );
};
