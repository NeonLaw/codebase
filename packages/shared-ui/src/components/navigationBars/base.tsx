/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/core';
import React, { useState } from 'react';

import { AuthenticatedDropdown } from './authenticatedDropdown';
import { AuthenticationContext } from '../../utils/authenticationContext';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Container } from '../container';
import { Link } from '../../components/link';
import { MdDehaze } from 'react-icons/md';
import { Search } from './search';
import { colors } from '../../themes/neonLaw';
import { useIntl } from 'gatsby-plugin-intl';

export const BaseNavigationBar = ({
  links = [] as any[],
  menus = [] as any[],
  sideNavigationDrawer,
}) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const intl = useIntl();

  const [loginButtonDisabled, disableLoginButton] = useState(false);

  return (
    <>
      <Flex
        as="header"
        position="fixed"
        bg="black"
        color="white"
        height="2em"
        width="full"
        zIndex={4}
        alignItems="center"
      >
        <Text flex="1" textAlign="center">
          Black Lives Matter
        </Text>
      </Flex>
      <Box
        top="2em"
        position="fixed"
        zIndex={4}
        bg="black"
        color="white"
        left="0"
        right="0"
        width="full"
        height="4em"
      >
        <Container>
          <Flex boxSize="100%" align="center">
            <Box
              mr={5}
              as={Link}
              cursor="pointer"
              display="block"
              to="/"
              aria-label="Neon Law, Back to homepage"
              minWidth="3em"
            >
              <img src="/images/logo.svg" alt="Neon Law" />
            </Box>

            <Search version="desktop" />

            <Flex flexGrow={1} align="center" justify="flex-end">
              {links.map((link, i) => (
                <Box className="nav-content-desktop" key={i} mr="0.5em">
                  <Box
                    as={Link}
                    cursor="pointer"
                    margin="0 10px"
                    paddingBottom="0.5em"
                    to={link.route}
                    position="relative"
                    transition="all .2s"
                    _after={{
                      background: 'white',
                      bottom: 0,
                      content: '""',
                      display: 'block',
                      height: '1px',
                      left: 0,
                      position: 'absolute',
                      right: '100%',
                      transition: 'all 0.4s cubic-bezier(0, 0.5, 0, 1)',
                    }}
                    _hover={{
                      '&:after': {
                        background: colors.cyanLight,
                        right: 0,
                      },
                      color: colors.cyanLight,
                    }}
                    activeClassName="nav-link--active"
                  >
                    {link.label}
                  </Box>
                </Box>
              ))}
              {menus.map((menu, i) => (
                <Box className="nav-content-desktop" key={i} mr="0.5em">
                  <Menu placement="bottom-end">
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      {menu.title}
                    </MenuButton>
                    <MenuList>
                      {menu.links.map((link, j) => (
                        <MenuItem key={j} as={Link} to={link.route}>
                          {link.label}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </Box>
              ))}
              <AuthenticationContext.Consumer>
                {({ isLoading, isAuthenticated, login }) => {
                  if (isLoading) {
                    return null;
                  }
                  if (isAuthenticated) {
                    return <AuthenticatedDropdown />;
                  }
                  return (
                    <Flex>
                      <Button
                        bg="transparent"
                        border="1px"
                        className="nav-content-desktop"
                        disabled={loginButtonDisabled}
                        onClick={() => {
                          disableLoginButton(true);
                          login();
                        }}
                      >
                        {intl.formatMessage({ id: 'auth.sign_up' })}
                      </Button>
                      <Box width="6px" />
                      <Button
                        bg="transparent"
                        border="1px"
                        className="nav-content-desktop"
                        disabled={loginButtonDisabled}
                        onClick={() => {
                          disableLoginButton(true);
                          login();
                        }}
                      >
                        {intl.formatMessage({ id: 'auth.login' })}
                      </Button>
                    </Flex>
                  );
                }}
              </AuthenticationContext.Consumer>
              <IconButton
                className="nav-content-mobile"
                aria-label="Navigation Menu"
                fontSize="20px"
                variant="ghost"
                icon={<MdDehaze />}
                onClick={() => {
                  onToggle();
                  document.body.setAttribute(
                    'style',
                    'margin-right: 0 !important',
                  );
                }}
              />
            </Flex>
          </Flex>
        </Container>
      </Box>
      <Drawer isOpen={isOpen} placement="left" size="xs" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent zIndex="5">
          <DrawerBody padding="0">{sideNavigationDrawer}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
