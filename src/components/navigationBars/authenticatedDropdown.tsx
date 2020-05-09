/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode
} from '@chakra-ui/core';
import { AuthenticationContext } from '@utils/authenticationContext';
import { Link } from '@components/link';
import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const CURRENT_USER = gql`
  {
    getCurrentUser {
      id
      name
      email
      picture
      role
    }
  }
`;

const UserAvatar = () => {
  return (
    <AuthenticationContext.Consumer>
      {({ user: { name, picture } }) => {
        return (
          <Avatar
            size="sm"
            cursor="pointer"
            name={name}
            src={picture}
          />
        );
      }}
    </AuthenticationContext.Consumer>
  );
};

export const AuthenticatedDropdown = () => {
  const { colorMode } = useColorMode();
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };
  const evenLighterBg = { dark: 'gray.600', light: 'gray.100' };
  const color = { dark: 'white', light: 'black' };
  const { data } = useQuery(CURRENT_USER);

  const role = data?.getCurrentUser?.role;

  return (
    <Box
      display={['none', 'none', 'flex']}
      color={color[colorMode]}>
      <Menu>
        <MenuButton>
          <UserAvatar />
        </MenuButton>
        <MenuList
          placement="bottom-end"
          bg={lighterBg[colorMode]}>
          <MenuItem
            as={Link}
            to='/portal'
            _hover={{ backgroundColor: evenLighterBg[colorMode] }}
          >
            Portal
          </MenuItem>
          {(role == 'lawyer' || role == 'admin') && (
            <MenuItem
              as={Link}
              to='/lawyers'
              _hover={{ backgroundColor: evenLighterBg[colorMode] }}
            >
              Lawyers
            </MenuItem>
          )}
          {(role == 'admin') && (
            <MenuItem
              as={Link}
              to='/admin'
              _hover={{ backgroundColor: evenLighterBg[colorMode] }}
            >
              Admin
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
                  Log out
                </MenuItem>
              );
            }}
          </AuthenticationContext.Consumer>
        </MenuList>
      </Menu>
    </Box>
  );
};
