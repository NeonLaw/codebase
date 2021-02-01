import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { colors, gutters, theme } from '../themes/neonLaw';

import { ApolloProvider } from '@apollo/client';
import { LoadingPage } from '../components/loadingPage';
import PortalBg from '../../../interface/src/images/dashboard-bg.jpg';
import {
  PortalNavigationBar
} from '../components/navigationBars/portalNavigationBar';
import {
  PortalSideNavContent
} from '../components/sideNavigation/portalSideNavigation';
import {
  PortalSideNavigation
} from '../components/sideNavigation/portalSideNavigation';
import React from 'react';
import { Redirect } from '@reach/router';
import { getApolloClient } from '../utils/getApolloClient';
import { portalNavLinks } from '../components/navigationBars/portalNavLinks';
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
  min-height: 100vh;

  .wrapper {
    display: grid;
    grid-template-rows: auto minmax(860px, auto);
    grid-template-columns: 216px 2fr;
    grid-template-areas: 'head head' 'aside main';
    width: 100%;
    margin: 3vw;
    overflow: hidden;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      margin: 0;
    }

    @media (max-width: 640px) {
      width: 100vh;
    }

    @media(min-height: 1100px) {
      grid-template-rows: auto minmax(90vh, auto);
      margin: 3vh 3vw;
    }
  }

  h2 {
    font-size: 2.5rem;
  }

  .portal-hamburger {
    display: none;

    @media(max-width: 800px) {
      display: flex;
      justify-content: center;
      min-width: 2.5rem;
    }
  }
`;

const Aside = styled.div`
  grid-area: 'aside';
  position: relative;

  @media(max-width: 800px) {
    display: none;
  }
`;

const Main = styled(SkipNavContent)`
    grid-area: 'main';
    padding: ${gutters.small};
    overflow: hidden;

    @media (max-width: 800px) {
      padding: ${gutters.xSmallOne};
    }
`;

export const PortalLayout = ({ children }) => {
  const { colorMode } = useColorMode();
  const {
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
    user
  } = useAuth0();
  const apolloClient = getApolloClient(getAccessTokenSilently);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!isAuthenticated) {
    return <Redirect noThrow={true} to="/" />;
  }

  const links = portalNavLinks({ email: user.email });

  return (
    <ApolloProvider client={apolloClient}>
      <SkipNavLink style={{top: 0, left: 0, color: colors.text[colorMode], padding: '10px', borderRadius: 'none'}}>Skip to content</SkipNavLink>
      <StyledPortalLayout>
        <div className="wrapper">
          <Aside
            style={{
              background:
               colorMode === 'dark' ? '#000' : 'rgba(255, 255, 255, 0.8)',
              color: colors.text[colorMode],
              height: '100%'
            }}
          >
            <PortalSideNavigation
              links={links}
            />
          </Aside>
          <PortalNavigationBar
            isRenderedOnDashboard={true}
            sideNavigationDrawer={<PortalSideNavContent links={links} />}
          />
          <Main
            style={{
              background: colorMode === 'dark' ? '#111' : theme.colors.white,
              color: colors.text[colorMode],
            }}
          >
            {children}
          </Main>
        </div>
      </StyledPortalLayout>
    </ApolloProvider>
  );
};
