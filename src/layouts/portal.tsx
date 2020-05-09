import {
  Box,
  Flex,
} from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthenticationContext } from '@utils/authenticationContext';
import { Container } from '@components/container';
import { Footer } from '@components/footer';
import { LoadingPage } from '@components/loadingPage';
import { PortalNavigationBar } from '@components/navigationBars/portal';
import { PortalSideNav } from '@components/sideNavigation/portal';
import React from 'react';

export const PortalLayout = ({ children }) => {
  return (
    <AuthenticationContext.Consumer>
      {({ isLoading, apolloClient }) => {
        if (isLoading) {
          return <LoadingPage />;
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
                    paddingTop="4em"
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
