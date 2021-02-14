import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode
} from '@chakra-ui/react';
import { Link } from '../../components/link';
import React from 'react';
import { UserAvatar } from '../userAvatar';
import { useAuth0 } from '@auth0/auth0-react';

export const AuthenticatedDropdown = () => {
  const { colorMode } = useColorMode();
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };
  const evenLighterBg = { dark: 'gray.600', light: 'gray.100' };
  const color = { dark: 'white', light: 'black' };
  const { isLoading, logout } = useAuth0();

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
            onClick={() => console.log('/portal')}
            _hover={{ backgroundColor: evenLighterBg[colorMode] }}
          >
            components_navbar.auth_portal
          </MenuItem>
          <MenuItem
            as={Link}
            onClick={() => console.log('/portal/settings')}
            _hover={{ backgroundColor: evenLighterBg[colorMode] }}
          >
            components_navbar.auth_settings
          </MenuItem>
          {isLoading ? null :
            (
              <MenuItem
                onClick={
                  () => logout({ returnTo: process.env.GATSBY_SITE_URL })
                }
                _hover={{ backgroundColor: evenLighterBg[colorMode] }}
              >
                components_navbar.auth_logout
              </MenuItem>
            )
          }
        </MenuList>
      </Menu>
    </Box>
  );
};
