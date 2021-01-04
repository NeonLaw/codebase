import { colors, gutters, theme } from '../themes/neonLaw';
import { ApolloProvider } from '@apollo/client';
import { LoadingPage } from '../components/loadingPage';
import PortalBg from '../../../interface/src/images/dashboard-bg.jpg';
import {
  PortalNavigationBar
} from '../components/navigationBars/portalNavigationBar';
import {
  PortalSideNavigation
} from '../components/sideNavigation/portalSideNavigation';
import React from 'react';
import { Redirect } from '@reach/router';
import { getApolloClient } from '../utils/getApolloClient';
import styled from '@emotion/styled';
import { useAuth0 } from '@auth0/auth0-react';
import { useColorMode } from '@chakra-ui/core';

const StyledPortalLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(${PortalBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;

  .wrapper {
    position: relative;
    height: 92vh;
    width: 92vw;
    display: flex;

    @media (max-width: 640px) {
      height: 100vh;
      width: 100vh;
      text-align: center;
    }
  }

  h2 {
    font-size: 2.5rem;
  }
`;

const Aside = styled.div`
  position: relative;
  width: 12em;
  background: #000000b0;

  @media (max-width: 800px) {
    width: 9em;
  }

  @media (max-width: 640px) {
    width: 6em;
  }
`;

const Main = styled.div`
  flex: 1;

  .content {
    padding: ${gutters.small};

    @media (max-width: 800px) {
      padding: ${gutters.xSmallOne};
    }
  }
`;

export const PortalLayout = ({ children }) => {
  const { colorMode } = useColorMode();
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const apolloClient = getApolloClient(getAccessTokenSilently);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!isAuthenticated) {
    return <Redirect noThrow={true} to="/" />;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <StyledPortalLayout
      >
        <div className="wrapper">
          <Aside>
            <PortalSideNavigation />
          </Aside>
          <Main
            style={{
              background:
                      colorMode === 'dark'
                        ? '#111'
                        : theme.colors.white,
              color: colors.text[colorMode]
            }}
          >
            <PortalNavigationBar isRenderedOnDashboard={true} />
            <div className="content">{children}</div>
          </Main>
        </div>
      </StyledPortalLayout>
    </ApolloProvider>
  );
};
