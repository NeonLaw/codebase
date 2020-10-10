import { Box, useColorMode } from '@chakra-ui/core';

import { AuthenticationContext } from '../../utils/authenticationContext';
import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import { Search } from '../navigationBars/search';
import { navigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

export const SideNavContent = ({ links }): JSX.Element => {
  const color = { dark: 'white', light: 'black' };
  const activeColor = { dark: 'cyan.500', light: 'cyan.800' };
  const bg = { dark: 'black', light: 'gray.200' };
  const { colorMode } = useColorMode();
  const intl = useIntl();

  return (
    <Box
      position="relative"
      color={color[colorMode]}
      bg={bg[colorMode]}
      height="100%"
      overflowY="auto"
    >
      <Box
        as="nav"
        height={'calc(100vh - 6em)'}
        aria-label="Main navigation"
        p="6"
      >
        <Box
          margin="0 auto"
          as="a"
          cursor="pointer"
          className="nav-content-mobile"
          onClick={() => {
            navigate('/');
          }}
          aria-label="Neon Law, Back to homepage"
          width="5em"
        >
          <img src="/images/logo.svg" alt="Neon Law" />
        </Box>
        <Box mb="10">
          <Search version="mobile" />
        </Box>
        {links.map((link, i) => (
          <Box mb="10" key={i}>
            <Link
              activeStyle={{ color: activeColor[colorMode] }}
              to={link.route}
            >
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
                <Box mb="10">
                  <Link
                    activeStyle={{ color: activeColor[colorMode] }}
                    to="/portal"
                  >
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
      </Box>
    </Box>
  );
};
