import {
  Box,
  Flex,
} from '@chakra-ui/core';
import { AdminNavigationBar } from '@components/navigationBars/admin';
import { AdminSideNav } from '@components/sideNavigation/admin';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthenticationContext } from '@utils/authenticationContext';
import { Container } from '@components/container';
import { Footer } from '@components/footer';
import { LoadingPage } from '@components/loadingPage';
import React from 'react';

export const AdminLayout: React.FC = ({ children }) => {
  return (
    <AuthenticationContext.Consumer>
      {({ isLoading, apolloClient }) => {
        if (isLoading) {
          return <LoadingPage />;
        }
        return (
          <ApolloProvider client={apolloClient}>
            <>
              <AdminNavigationBar />
              <Flex
                flex="1"
                direction="row"
              >
                <AdminSideNav />
                <Flex
                  minHeight="100vh"
                  flex="1"
                  width="100%"
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
