import { Box, useColorMode } from '@chakra-ui/core';
import { colors, gutters, theme } from '../../themes/neonLaw';

import { AuthenticationContext } from '../../utils/authenticationContext';
import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import { Search } from '../navigationBars/search';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';

const StyledSideNavContent = styled.div<{ isRenderedOnDashboard?: boolean }>`
  nav {
    padding: ${({ isRenderedOnDashboard }) =>
    !isRenderedOnDashboard ? '1.5rem' : gutters.xSmall};

    @media (max-width: 800px) {
      padding: ${({ isRenderedOnDashboard }) =>
    !isRenderedOnDashboard ? '1.5rem' : '.2em'};
    }
  }

  .logo {
    &-container {
      display: ${({ isRenderedOnDashboard }) =>
    isRenderedOnDashboard ? 'flex' : ''};
      height: 100%;
      width: 100%;
      justify-content: center;
    }

    @media (max-width: 800px) {
      width: ${({ isRenderedOnDashboard }) =>
    isRenderedOnDashboard ? '3.5rem' : ''};
      margin-top: ${({ isRenderedOnDashboard }) =>
    isRenderedOnDashboard ? gutters.xSmallOne : ''};
    }
  }

  .links {
    margin-top: ${gutters.small};

    @media (max-width: 800px) {
      margin-top: ${gutters.medium};
    }

    & > * {
      &:not(:last-child) {
        margin-bottom: ${gutters.small};
      }
    }

    .link {
      transition: all 0.2s;
      padding: 0.1rem 1rem;
      border-left: 2px solid transparent;

      @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: ${({ isRenderedOnDashboard }) =>
    isRenderedOnDashboard ? 'center' : ''};
        font-size: ${({ isRenderedOnDashboard }) =>
    isRenderedOnDashboard ? '90%' : ''};
        margin: 0 2.5rem;
        padding: 0.1rem 0.2rem;
        border-left: none;
        border-bottom: 2px solid transparent;
      }

      @media(max-width: 640px) {
        margin: 0;
      }

      &:hover {
        color: ${colors.cyanLight};
      }
    }

    .active {
      color: ${colors.cyanLight};
      border-left: 2px solid ${colors.cyanLight};

      @media (max-width: 800px) {
        border-left: none;
        border-bottom: 2px solid ${colors.cyanLight};
      }
    }

    svg {
      display: inline-block;
      margin-right: ${gutters.xSmallOne};


      @media (max-width: 800px) {
        margin-right: 0;
        margin-bottom: 0.3rem;
        display: inline-block;
      }
    }
  }
`;

export const SideNavContent = ({
  links,
  isRenderedOnDashboard,
}: {
  links: any;
  isRenderedOnDashboard?: boolean;
}): JSX.Element => {
  const color = { dark: 'white', light: 'black' };
  const activeColor = { dark: 'cyan.500', light: 'cyan.800' };
  const bg = { dark: 'black', light: 'gray.200' };
  const { colorMode } = useColorMode();
  const intl = useIntl();

  return (
    <StyledSideNavContent isRenderedOnDashboard={isRenderedOnDashboard}>
      <Box
        position="relative"
        color={!isRenderedOnDashboard ? color[colorMode] : theme.colors.white}
        bg={!isRenderedOnDashboard ? bg[colorMode] : {}}
        height="100%"
        overflowY="auto"
      >
        <Box
          as="nav"
          height={!isRenderedOnDashboard ? 'calc(100vh - 6em)' : ''}
          aria-label="Main navigation"
          style={
            isRenderedOnDashboard
              ? {
                display: 'flex',
                flexDirection: 'column',
              }
              : {}
          }
        >
          <Box
            margin="0 auto"
            as="a"
            cursor="pointer"
            className={`${
              !isRenderedOnDashboard ? 'nav-content-mobile' : ''
            } logo-container`}
            onClick={() => {
              navigate('/');
            }}
            aria-label="Neon Law, Back to homepage"
          >
            <img className="logo" src="/images/logo.svg" alt="Neon Law" />
          </Box>
          <Box mb="10" display={isRenderedOnDashboard ? 'none' : ''}>
            <Search version="mobile" />
          </Box>
          <div className="links">
            {links.map((link, i) => (
              !link ? null : <Box key={i}>
                <Link
                  activeStyle={{ color: activeColor[colorMode] }}
                  activeClassName="active"
                  to={link.route}
                  className="link"
                >
                  {isRenderedOnDashboard ? link.icon : null}
                  {link.label}
                </Link>
              </Box>
            ))}
            <AuthenticationContext.Consumer>
              {({ isLoading, isAuthenticated, login }) => {
                if (isLoading || isAuthenticated) {
                  return null;
                }
                return (
                  <>
                    <Box
                      mb="10"
                      onClick={() => {
                        login();
                      }}
                      cursor="pointer"
                    >
                      {intl.formatMessage({ id: 'auth.sign_up' })}
                    </Box>
                    <Box
                      mb="10"
                      onClick={() => {
                        login();
                      }}
                      cursor="pointer"
                    >
                      {intl.formatMessage({ id: 'auth.login' })}
                    </Box>
                  </>
                );
              }}
            </AuthenticationContext.Consumer>
          </div>
        </Box>
      </Box>
    </StyledSideNavContent>
  );
};
