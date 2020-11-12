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
  useDisclosure,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import { colors, gutters } from '../../themes/neonLaw';

import { AuthenticatedDropdown } from './authenticatedDropdown';
import { AuthenticationContext } from '../../utils/authenticationContext';
import { BlackLivesMatter } from './black-lives-matter';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Container } from '../container';
import { Link } from '../../components/link';
import { MdDehaze } from 'react-icons/md';
import { Search } from './search';
import { ThemeSwitcher } from '../theme-switcher';
import { useIntl } from 'gatsby-plugin-intl';

interface BaseNavigationBarProps {
  isRenderedOnDashboard?: boolean;
  links?: any;
  menus?: any;
  sideNavigationDrawer?: any;
}

export const BaseNavigationBar = ({
  links = [] as any[],
  menus = [] as any[],
  sideNavigationDrawer,
  isRenderedOnDashboard,
}: BaseNavigationBarProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const intl = useIntl();

  const [loginButtonDisabled, disableLoginButton] = useState(false);

  return (
    <>
      {!isRenderedOnDashboard ? <BlackLivesMatter /> : null}
      <Box
        top="2em"
        position={`${!isRenderedOnDashboard ? 'fixed' : ''}`}
        padding={`${
          !isRenderedOnDashboard ? 0 : `${gutters.xSmallOne} ${gutters.xSmall}
          `}`}
        zIndex={4}
        bg={!isRenderedOnDashboard ? 'black' : '#f4f4f4'}
        color={!isRenderedOnDashboard ? 'white' : 'black'}
        left="0"
        right="0"
        width="full"
        height={!isRenderedOnDashboard ? '4em' : 'auto'}
      >
        <Container isFullBleed={isRenderedOnDashboard}>
          <Flex boxSize="100%" align="center">
            {!isRenderedOnDashboard ? (
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
            ) : null}

            <Search 
              version="desktop" 
              isRenderedOnDashboard={isRenderedOnDashboard} 
            />

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

              {
                isRenderedOnDashboard ? 
                  <ThemeSwitcher isRenderedOnDashboard={true} /> : null
              }

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
              {!isRenderedOnDashboard ? (
                <IconButton
                  className="nav-content-mobile"
                  aria-label="Navigation Menu"
                  fontSize="20px"
                  variant="ghost"
                  color="black"
                  icon={<MdDehaze />}
                  textColor="white"
                  onClick={() => {
                    onToggle();
                    document.body.setAttribute(
                      'style',
                      'margin-right: 0 !important',
                    );
                  }}
                />
              ) : null}
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
