import {
  Box,
  Flex,
} from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/client';
import { AuthenticationContext } from '../utils/authenticationContext';
import { Container } from '../components/container';
import { Footer } from '../components/footer';
import { LoadingPage } from '../components/loadingPage';
import { PortalNavigationBar } from '../components/navigationBars/portal';
import { PortalSideNav } from '../components/sideNavigation/portal';
import React from 'react';
import { Redirect } from '@reach/router';

export const PortalLayout = ({ children }) => {
  return (
    <AuthenticationContext.Consumer>
      {({ isLoading, isAuthenticated, apolloClient }) => {
        if (isLoading) {
          return <LoadingPage />;
        }
        if (!isAuthenticated) {
          return <Redirect noThrow={true} to="/" />;
        }
        return (
          <ApolloProvider client={apolloClient}>
            <>
              <PortalNavigationBar />
              <Flex
                flex="1"
                direction="row"
              >
                <PortalSideNav />
                <Flex
                  minHeight="100vh"
                  flex="1"
                  width={['100%', '100%', 'calc(100% - 10em)']}
                  direction="column"
                  marginLeft={['none', 'none', '10em']}
                >
                  <Box
                    flex="1"
                    paddingTop="6em"
                  >
                    <Container>
                      {children}
                    </Container>
                  </Box>
                  <Footer />
                </Flex>
              </Flex>
            </>
          </ApolloProvider>
        );
      }}
    </AuthenticationContext.Consumer>
  );
};
