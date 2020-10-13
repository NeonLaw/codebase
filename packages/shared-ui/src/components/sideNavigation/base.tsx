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

const StyledSideNavContent = styled.div`
  .links {
    & > * {
      &:not(:last-child) {
        margin-bottom: ${gutters.small};
      }
    }

    a {
      display: flex;
      align-items: center;
      transition: all .2s;
      padding: .1rem 1rem;
      border-left: 2px solid transparent;

      &:hover {
        color: ${colors.cyanLight};
      }
    }

    .active {
      color: ${colors.cyanLight};
      border-left: 2px solid ${colors.cyanLight};
    }

    svg {
      display: inline-block;
      margin-right: ${gutters.xSmallOne};
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
    <StyledSideNavContent>
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
          p={!isRenderedOnDashBoard ? '6' : gutters.xSmall}
        >
          <Box
            margin="0 auto"
            as="a"
            cursor="pointer"
            className={!isRenderedOnDashBoard ? 'nav-content-mobile' : ''}
            onClick={() => {
              navigate('/');
            }}
            aria-label="Neon Law, Back to homepage"
          >
            <img src="/images/logo.svg" alt="Neon Law" />
          </Box>
          <Box mb="10">
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
                  {
                    isRenderedOnDashBoard ? link.icon : null
                  }
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
