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

export const AuthenticatedDropdown = () => {
  const { colorMode } = useColorMode();
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };
  const evenLighterBg = { dark: 'gray.600', light: 'gray.100' };
  const color = { dark: 'white', light: 'black' };

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
          <MenuItem
            _hover={{ backgroundColor: evenLighterBg[colorMode] }}
          >
                components_navbar.auth_logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
