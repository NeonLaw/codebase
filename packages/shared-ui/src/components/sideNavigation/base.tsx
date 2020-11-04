import { Box, useColorMode } from '@chakra-ui/core';
import { colors, gutters, theme } from '../../themes/neonLaw';

import { AiOutlineShop } from 'react-icons/ai';
import { AuthenticationContext } from '../../utils/authenticationContext';
import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import { Search } from '../navigationBars/search';
import { navigate } from 'gatsby';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';

const StyledSideNavContent = styled.div<{ isRenderedOnDashBoard?: boolean }>`
  nav {
    padding: ${({ isRenderedOnDashBoard }) =>
    !isRenderedOnDashBoard ? '1.5rem' : gutters.xSmall};

    @media (max-width: 640px) {
      padding: ${({ isRenderedOnDashBoard }) =>
    !isRenderedOnDashBoard ? '1.5rem' : '.2em'};
    }
  }

  .logo {
    &-container {
      display: ${({ isRenderedOnDashBoard }) =>
    isRenderedOnDashBoard ? 'flex' : ''};
      height: 100%;
      width: 100%;
      justify-content: center;
    }

    @media (max-width: 640px) {
      width: ${({ isRenderedOnDashBoard }) =>
    isRenderedOnDashBoard ? '3.5rem' : ''};
      margin-top: ${({ isRenderedOnDashBoard }) =>
    isRenderedOnDashBoard ? gutters.xSmallOne : ''};
    }
  }

  .links {
    margin-top: ${gutters.small};

    @media (max-width: 640px) {
      margin-top: ${gutters.medium};
    }

    & > * {
      &:not(:last-child) {
        margin-bottom: ${gutters.small};
      }
    }

    a {
      transition: all 0.2s;
      padding: 0.1rem 1rem;
      border-left: 2px solid transparent;

      @media (max-width: 640px) {
        display: flex;
        align-items: center;
        justify-content: ${({ isRenderedOnDashBoard }) => 
    isRenderedOnDashBoard ? 'center' : ''};
        flex-direction: column;
        font-size: 90%;
        padding: 0.1rem 0.2rem;
        border-left: none;
        border-bottom: 2px solid transparent;
      }

      &:hover {
        color: ${colors.cyanLight};
      }
    }

    .active {
      color: ${colors.cyanLight};
      border-left: 2px solid ${colors.cyanLight};

      @media (max-width: 640px) {
        border-left: none;
        border-bottom: 2px solid ${colors.cyanLight};
      }
    }

    svg {
      display: inline-block;
      margin-right: ${gutters.xSmallOne};

      @media (max-width: 800px) {
        display: none;
      }

      @media (max-width: 640px) {
        margin-right: 0;
        margin-bottom: 0.3rem;
        display: inline-block;
      }
    }
  }
`;

export const SideNavContent = ({
  links,
  isRenderedOnDashBoard,
}: {
  links: any;
  isRenderedOnDashBoard?: boolean;
}): JSX.Element => {
  const color = { dark: 'white', light: 'black' };
  const activeColor = { dark: 'cyan.500', light: 'cyan.800' };
  const bg = { dark: 'black', light: 'gray.200' };
  const { colorMode } = useColorMode();
  const intl = useIntl();

  return (
    <StyledSideNavContent isRenderedOnDashBoard={isRenderedOnDashBoard}>
      <Box
        position="relative"
        color={!isRenderedOnDashBoard ? color[colorMode] : theme.colors.white}
        bg={!isRenderedOnDashBoard ? bg[colorMode] : {}}
        height="100%"
        overflowY="auto"
      >
        <Box
          as="nav"
          height={!isRenderedOnDashBoard ? 'calc(100vh - 6em)' : ''}
          aria-label="Main navigation"
          style={
            isRenderedOnDashBoard
              ? {
                alignItems: 'center',
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
              !isRenderedOnDashBoard ? 'nav-content-mobile' : ''
            } logo-container`}
            onClick={() => {
              navigate('/');
            }}
            aria-label="Neon Law, Back to homepage"
          >
            <img className="logo" src="/images/logo.svg" alt="Neon Law" />
          </Box>
          <Box mb="10" display={isRenderedOnDashBoard ? 'none' : ''}>
            <Search version="mobile" />
          </Box>
          <div className="links">
            {links.map((link, i) => (
              <Box key={i}>
                <Link
                  activeStyle={{ color: activeColor[colorMode] }}
                  activeClassName="active"
                  to={link.route}
                >
                  {isRenderedOnDashBoard ? link.icon : null}
                  {link.label}
                </Link>
              </Box>
            ))}
            <AuthenticationContext.Consumer>
              {({ isLoading, isAuthenticated, login }) => {
                if (isLoading) {
                  return null;
                }
                if (isAuthenticated) {
                  return (
                    <Box>
                      <Link
                        activeStyle={{ color: activeColor[colorMode] }}
                        to="/portal"
                      >
                        <AiOutlineShop />
                        {intl.formatMessage({
                          id: 'components_navbar.auth_portal',
                        })}
                      </Link>
                    </Box>
                  );
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
