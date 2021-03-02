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
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

export const AuthenticatedDropdown = () => {
  const { colorMode } = useColorMode();
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };
  const evenLighterBg = { dark: 'gray.600', light: 'gray.100' };
  const color = { dark: 'white', light: 'black' };
  const router = useRouter();
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
            cursor="pointer"
            onClick={() => router.push('/portal')}
            _hover={{ backgroundColor: evenLighterBg[colorMode] }}
          >
            {intl.formatMessage({ id: 'components_navbar.auth_portal' })}
          </MenuItem>
          <MenuItem
            as={Link}
            cursor="pointer"
            onClick={() => router.push('/portal/settings')}
            _hover={{ backgroundColor: evenLighterBg[colorMode] }}
          >
            {intl.formatMessage({ id: 'components_navbar.auth_settings' })}
          </MenuItem>
          <MenuItem
            cursor="pointer"
            _hover={{ backgroundColor: evenLighterBg[colorMode] }}
          >
            {intl.formatMessage({ id: 'components_navbar.auth_logout' })}
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};
