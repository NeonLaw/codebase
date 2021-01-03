import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode
} from '@chakra-ui/core';
import { Link } from '../../components/link';
import React from 'react';
import { UserAvatar } from '../userAvatar';
import { navigate } from 'gatsby';
import { useAuth0 } from '@auth0/auth0-react';
import { useIntl } from 'gatsby-plugin-intl';

export const AuthenticatedDropdown = () => {
  const { colorMode } = useColorMode();
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };
  const evenLighterBg = { dark: 'gray.600', light: 'gray.100' };
  const color = { dark: 'white', light: 'black' };
  const intl = useIntl();
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
            onClick={() => navigate('/portal')}
            _hover={{ backgroundColor: evenLighterBg[colorMode] }}
          >
            {intl.formatMessage({ id: 'components_navbar.auth_portal' })}
          </MenuItem>
          <MenuItem
            as={Link}
            onClick={() => navigate('/portal/settings')}
            _hover={{ backgroundColor: evenLighterBg[colorMode] }}
          >
            {intl.formatMessage({ id: 'components_navbar.auth_settings' })}
          </MenuItem>
          {isLoading ? null :
            (
              <MenuItem
                onClick={() => logout()}
                _hover={{ backgroundColor: evenLighterBg[colorMode] }}
              >
                {intl.formatMessage({ id: 'components_navbar.auth_logout' })}
              </MenuItem>
            )
          }
        </MenuList>
      </Menu>
    </Box>
  );
};
