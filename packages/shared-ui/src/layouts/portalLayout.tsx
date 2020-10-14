import { gutters, theme } from '../themes/neonLaw';

import { ApolloProvider } from '@apollo/client';
import { AuthenticationContext } from '../utils/authenticationContext';
import { LoadingPage } from '../components/loadingPage';
import PortalBg from '../../../interface/src/images/dashboard-bg.jpg';
import { PortalNavigationBar } from '../components/navigationBars/portal';
import { PortalSideNav } from '../components/sideNavigation/portal';
import React from 'react';
import { Redirect } from '@reach/router';
import styled from '@emotion/styled';
import {
  useColorMode,
} from '@chakra-ui/core';

const StyledPortalLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: 
    linear-gradient(to right, rgba(0,0,0, .2), rgba(0,0,0, .5)),
    url(${PortalBg});
  background-size: center;
  background-position: centers;
  height: 100vh;
  
  .wrapper {
    position: relative;
    height: 92vh;
    width: 92vw;
    display: flex;
  }
`;

const Aside = styled.div`
  width: 12em;
  background: #000000b0;
`;

const Main = styled.div`
  flex: 1;

  .content {
    padding: ${gutters.small};
  }
`;

export const PortalLayout = ({ children }) => {

  const { colorMode, toggleColorMode } = useColorMode();

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
            <StyledPortalLayout>
              <div className="wrapper">
                <Aside>
                  <PortalSideNav />
                </Aside>
                <Main style={{
                  background: colorMode === 'dark' ? 
                    theme.colors.black : theme.colors.white 
                }}>
                  <PortalNavigationBar portal={true} />
                  <div className="content">
                    {children}
                  </div>
                  <button 
                    onClick={() => toggleColorMode()}
                  >
                    {/* Toggle Theme */}
                  </button>
                </Main>
              </div>
            </StyledPortalLayout>
          </ApolloProvider>
        );
      }}
    </AuthenticationContext.Consumer>
  );
};
