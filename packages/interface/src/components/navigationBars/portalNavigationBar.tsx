import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
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
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Container } from '../container';
import { Link } from '../link';
import { Search } from './search';
import { ThemeSwitcher } from '../theme-switcher';
import { useIntl } from 'gatsby-plugin-intl';

interface BaseNavigationBarProps {
  isRenderedOnDashboard?: boolean;
  links?: any;
  menus?: any;
  sideNavigationDrawer?: any;
}

export const PortalNavigationBar = ({
  links = [] as any[],
  menus = [] as any[],
  sideNavigationDrawer,
}: BaseNavigationBarProps) => {
  const { isOpen, onClose } = useDisclosure();
  const intl = useIntl();

  const [loginButtonDisabled, disableLoginButton] = useState(false);

  return (
    <>
      <Box
        top="2em"
        position='inherit'
        padding={`${gutters.xSmallOne} ${gutters.xSmall}`}
        zIndex={4}
        bg='#f4f4f4'
        color='black'
        left="0"
        right="0"
        width="full"
        height='auto'
      >
        <Container isFullBleed={true}>
          <Flex boxSize="100%" align="center">
            <Search
              version="desktop"
              isRenderedOnDashboard={true}
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
                        background: colors.primaryColor400,
                        right: 0,
                      },
                      color: colors.primaryColor400,
                    } as any}
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

              <ThemeSwitcher isRenderedOnDashboard={true} />

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
