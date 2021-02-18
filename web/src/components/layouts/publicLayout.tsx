import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { ApolloProvider } from '@apollo/client';
import { BaseFooter } from '../footer/baseFooter';
import { Breadcrumbs } from '../breadcrumbs';
import { PublicNavigationBar } from '../navigationBars/publicNavigationBar';
import React from 'react';
import { colors } from '../../styles/neonLaw';
import { getApolloClient } from '../../utils/getApolloClient';
import { useAuth0 } from '@auth0/auth0-react';

export const PublicLayout = ({
  children,
  isBgLighter,
  isFooterWhite
}: {
  children: JSX.Element | JSX.Element[];
  currentSite?: string;
  isBgLighter?: boolean;
  isFooterWhite?: boolean;
}) => {
  const { colorMode } = useColorMode();
  const { getAccessTokenSilently } = useAuth0();
  const apolloClient = getApolloClient(getAccessTokenSilently);

  return (
    <Box
      bg={colors.background[colorMode]}
      color={colors.text[colorMode]}
    >
      <Flex
        minHeight="100vh"
        direction="column"
        background={isBgLighter ? colors.lighterBg[colorMode] : 'inherit'}
      >
        <ApolloProvider client={apolloClient}>
          <>
            <PublicNavigationBar />
            <Box flex={1}>
              <Breadcrumbs />
              <main role="main">{children}</main>
            </Box>
          </>
        </ApolloProvider>
        <BaseFooter isWhite={isFooterWhite} />
      </Flex>
    </Box>
  );
};
