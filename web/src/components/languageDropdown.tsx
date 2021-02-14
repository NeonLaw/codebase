import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode
} from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import React from 'react';
import { colors } from '../styles/neonLaw';

export const LanguageDropdown = () => {
  const { colorMode } = useColorMode();
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };
  const evenLighterBg = { dark: 'gray.600', light: 'gray.100' };

  return (
    <>
      <Box padding="7px 0">
        <Menu
          placement="top"
        >
          <MenuButton>
            languages.language
            <ChevronUpIcon />
          </MenuButton>
          <MenuList
            bg={lighterBg[colorMode]}
            color={colors.text[colorMode]}
          >
            <MenuItem
              _hover={{ backgroundColor: evenLighterBg[colorMode] }}
            >
              changeLocale to en
              languages.english
            </MenuItem>
            <MenuItem
              _hover={{ backgroundColor: evenLighterBg[colorMode] }}
            >
              changeLocale to es
              languages.spanish
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box
        cursor="pointer"
        width="100%"
        display={['block', 'block', 'none']}
        padding="7px 0"
      >
        <Text>languageDropdown.text</Text>
      </Box>
    </>
  );
};
