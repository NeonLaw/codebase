/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode
} from '@chakra-ui/core';

import { AuthenticationContext } from '../../utils/authenticationContext';
import { Link } from '../../components/link';
import React from 'react';
import { UserAvatar } from '../userAvatar';
import { useCurrentUserQuery } from '../../utils/api';
import { useIntl } from 'gatsby-plugin-intl';

export const AuthenticatedDropdown = () => {
  const { colorMode } = useColorMode();
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };
  const evenLighterBg = { dark: 'gray.600', light: 'gray.100' };
  const color = { dark: 'white', light: 'black' };
  const { data } = useCurrentUserQuery();

  const role = data?.getCurrentUser?.role;
  const intl = useIntl();

  return (
    <Box
      display='flex'
      color={color[colorMode]}>
      <Menu
        placement="bottom-end"
      >
        <MenuButton>
          <UserAvatar />
        </MenuButton>
        <MenuList
          bg={lighterBg[colorMode]}>
          <MenuItem
            as={Link}
            to='/portal'
            _hover={{ backgroundColor: evenLighterBg[colorMode] }}
          >
            {intl.formatMessage({ id: 'components_navbar.auth_portal' })}
          </MenuItem>
          {(role == 'lawyer' || role == 'admin') && (
            <MenuItem
              as={Link}
              to='/lawyers'
              _hover={{ backgroundColor: evenLighterBg[colorMode] }}
            >
              {intl.formatMessage({ id: 'components_navbar.auth_lawyers' })}
            </MenuItem>
          )}
          {(role == 'admin') && (
            <MenuItem
              as={Link}
              to='/admin'
              _hover={{ backgroundColor: evenLighterBg[colorMode] }}
            >
              {intl.formatMessage({ id: 'components_navbar.auth_admin' })}
            </MenuItem>
          )}
          <AuthenticationContext.Consumer>
            {({ isLoading, logout }) => {
              if (isLoading) {
                return null;
              }
              return (
                <MenuItem
                  onClick={() => logout()}
                  _hover={{ backgroundColor: evenLighterBg[colorMode] }}
                >
                  {intl.formatMessage({ id: 'components_navbar.auth_logout' })}
                </MenuItem>
              );
            }}
          </AuthenticationContext.Consumer>
        </MenuList>
      </Menu>
    </Box>
  );
};
