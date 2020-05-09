import {
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { changeLocale, useIntl } from 'gatsby-plugin-intl';
import React from 'react';

export const LanguageDropdown = () => {
  const { colorMode } = useColorMode();
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };
  const evenLighterBg = { dark: 'gray.600', light: 'gray.100' };
  const intl = useIntl();

  return (
    <>
      <Box display={['none', 'none', 'flex']} padding="7px 0">
        <Menu>
          <MenuButton>
            {intl.formatMessage({ id: 'languages.language' })}
            <Icon name="chevron-up" />
          </MenuButton>
          <MenuList
            placement="top"
            bg={lighterBg[colorMode]}
          >
            <MenuItem
              _hover={{ backgroundColor: evenLighterBg[colorMode] }}
              onClick={() => { changeLocale('en'); }}
            >
              {intl.formatMessage({ id: 'languages.english' })}
            </MenuItem>
            <MenuItem
              _hover={{ backgroundColor: evenLighterBg[colorMode] }}
              onClick={() => { changeLocale('es'); }}
            >
              {intl.formatMessage({ id: 'languages.spanish' })}
            </MenuItem>
          </MenuList>
        </Menu>
      </Box >
      <Box
        cursor="pointer"
        width="100%"
        display={['block', 'block', 'none']}
        textAlign="center"
        padding="7px 0"
      >
        <Text>
          Currently viewing this site in English
        </Text>
      </Box>
    </>
  );
};
