import { Box, Flex } from '@chakra-ui/core';

import { ApolloProvider } from '@apollo/client';
import { AuthenticationContext } from '../utils/authenticationContext';
import { Breadcrumbs } from '../components/breadcrumbs';
import { Footer } from '../components/footer';
import { PublicNavigationBar } from '../components/navigationBars/public';
import React from 'react';
import { publicClient } from '../utils/authenticationContext';

export const PublicLayout = ({
  children,
  isFooterWhite,
}: {
  children: JSX.Element | JSX.Element[];
  isFooterWhite?: boolean;
}) => {
  return (
    <Flex minHeight="100vh" direction="column">
      <AuthenticationContext.Consumer>
        {({ isLoading, apolloClient }) => {
          return (
            <ApolloProvider client={isLoading ? publicClient : apolloClient}>
              <>
                <PublicNavigationBar />
                <Box flex={1}>
                  <Breadcrumbs />
                  <main role="main">
                    {children}
                  </main>
                </Box>
              </>
            </ApolloProvider>
          );
        }}
      </AuthenticationContext.Consumer>
      <Footer isWhite={isFooterWhite} />
    </Flex>
  );
};
