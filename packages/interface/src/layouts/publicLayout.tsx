import { Box, Flex, useColorMode } from '@chakra-ui/core';

import { ApolloProvider } from '@apollo/client';
import { AuthenticationContext } from '../utils/authenticationContext';
import { Breadcrumbs } from '../components/breadcrumbs';
import { Footer } from '../components/footer';
import { PublicNavigationBar } from '../components/navigationBars/public';
import React from 'react';
import { colors } from '../themes/neonLaw';
import { publicClient } from '../utils/authenticationContext';

export const PublicLayout = ({
  children,
  isBgLighter,
}: {
  children: JSX.Element | JSX.Element[];
  currentSite?: string;
  isBgLighter?: boolean;
}) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      minHeight="100vh"
      direction="column"
      // eslint-disable-next-line
      // @ts-ignore
      background={isBgLighter ? colors.lighterBg[colorMode] : null}
    >
      <AuthenticationContext.Consumer>
        {({ isLoading, apolloClient }) => {
          return (
            <ApolloProvider client={isLoading ? publicClient : apolloClient}>
              <>
                <PublicNavigationBar />
                <Box flex={1}>
                  <Breadcrumbs />
                  <main role="main">{children}</main>
                </Box>
              </>
            </ApolloProvider>
          );
        }}
      </AuthenticationContext.Consumer>
      <Footer />
    </Flex>
  );
};
