import { colors, gutters, theme } from '../../styles/neonLaw';

import { ApolloProvider } from '@apollo/client';
import { BaseFooter } from '../footer/baseFooter';
import { LoadingPage } from '../loadingPage';
import {
  PortalNavigationBar
} from '../navigationBars/portalNavigationBar';
import {
  PortalSideNavContent
} from '../sideNavigation/portalSideNavigation';
import {
  PortalSideNavigation
} from '../sideNavigation/portalSideNavigation';
import React from 'react';
import { getApolloClient } from '../../utils/getApolloClient';
import { portalNavLinks } from '../navigationBars/portalNavLinks';
import styled from '@emotion/styled';
import { useColorMode } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';

const StyledPortalLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),
    url(/images/dashboard-pg.jpg);
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

    @media (min-height: 1100px) {
      grid-template-rows: auto minmax(90vh, auto);
      margin: 3vh 3vw;
    }
  }

  h2 {
    font-size: 2.5rem;
  }

  .portal-hamburger {
    display: none;

    @media (max-width: 800px) {
      display: flex;
      justify-content: center;
      min-width: 2.5rem;
    }
  }
`;

const Aside = styled.div`
  grid-area: 'aside';
  position: relative;

  @media (max-width: 800px) {
    display: none;
  }
`;

const Main = styled.main`
  grid-area: 'main';
  padding: ${gutters.small};
  overflow: hidden;

  @media (max-width: 800px) {
    padding: ${gutters.xSmallOne};
  }
`;

const FooterWrapperMobile = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
`;

export const PortalLayout = ({ children }) => {
  const { colorMode } = useColorMode();
  const {
    isLoading,
    user,
  } = useUser();
  const apolloClient = getApolloClient();
  const router = useRouter();

  if (isLoading) {
    return <LoadingPage />;
  }

  const links = portalNavLinks({ email: user.email });

  if (user) {
    return (
      <ApolloProvider client={apolloClient}>
        <StyledPortalLayout>
          <div className="wrapper">
            <Aside
              style={{
                background:
                colorMode === 'dark' ? '#000' : 'rgba(255, 255, 255, 0.8)',
                color: colors.text[colorMode],
                height: '100%',
              }}
            >
              <PortalSideNavigation links={links} />
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
        <FooterWrapperMobile>
          <BaseFooter hideTheSection={true} />
        </FooterWrapperMobile>
      </ApolloProvider>
    );
  }

  router.push('/');

  return <p>Redirecting</p>;
};
