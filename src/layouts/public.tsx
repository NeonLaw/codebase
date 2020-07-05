import { Box, Flex } from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthenticationContext } from '@utils/authenticationContext';
import { Breadcrumbs } from '@components/breadcrumbs';
import { Container } from '@components/container';
import { Footer } from '@components/footer';
import { PrivacyDisclaimer } from '@components/privacyDisclaimer';
import { PublicNavigationBar } from '@components/navigationBars/public';
import React from 'react';
import { publicClient } from '@utils/authenticationContext';

export const PublicLayout: React.FC = ({ children }) => {
  return (
    <Flex minHeight="100vh" direction="column">
      <AuthenticationContext.Consumer>
        {({ isLoading, apolloClient }) => {
          return (
            <ApolloProvider client={isLoading ? publicClient : apolloClient}>
              <>
                <PublicNavigationBar />
                <Box flex={1} padding="8em 0 4em 0">
                  <Container>
                    <Breadcrumbs />
                    {children}
                  </Container>
                </Box>
              </>
            </ApolloProvider>
          );
        }}
      </AuthenticationContext.Consumer>
      <PrivacyDisclaimer />
      <Footer />
    </Flex>
  );
};
