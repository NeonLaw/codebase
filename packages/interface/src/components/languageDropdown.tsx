import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode
} from '@chakra-ui/core';
import { changeLocale, useIntl } from 'gatsby-plugin-intl';

import { ChevronUpIcon } from '@chakra-ui/icons';
import React from 'react';
import { colors } from '../themes/neonLaw';

export const LanguageDropdown = () => {
  const { colorMode } = useColorMode();
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };
  const evenLighterBg = { dark: 'gray.600', light: 'gray.100' };
  const intl = useIntl();

  return (
    <>
      <Box padding="7px 0">
        <Menu
          placement="top"
        >
          <MenuButton>
            {intl.formatMessage({ id: 'languages.language' })}
            <ChevronUpIcon />
          </MenuButton>
          <MenuList
            bg={lighterBg[colorMode]}
            color={colors.text[colorMode]}
          >
            <MenuItem
              _hover={{ backgroundColor: evenLighterBg[colorMode] }}
              onClick={() => {
                changeLocale('en');
              }}
            >
              {intl.formatMessage({ id: 'languages.english' })}
            </MenuItem>
            <MenuItem
              _hover={{ backgroundColor: evenLighterBg[colorMode] }}
              onClick={() => {
                changeLocale('es');
              }}
            >
              {intl.formatMessage({ id: 'languages.spanish' })}
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box
        cursor="pointer"
        width="100%"
        display={['block', 'block', 'none']}
        textAlign="center"
        padding="7px 0"
      >
        <Text>{intl.formatMessage({ id: 'languageDropdown.text' })}</Text>
      </Box>
    </>
  );
};
