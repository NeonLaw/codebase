import { Box, useColorMode } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { BaseFooter } from '../footer/baseFooter';
import { DeleteYourDataStyles } from '../../styles/deleteYourDataStyles';
import React from 'react';
import { colors } from '../../styles/deleteYourData';
import { getApolloClient } from '../../utils/getApolloClient';
import { useUser } from '@auth0/nextjs-auth0';

export const DeleteYourDataLayout = ({ children }) => {
  const { colorMode } = useColorMode();
  const { user } = useUser();
  const apolloClient = getApolloClient();
  console.log(user);

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
