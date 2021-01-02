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
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import { colors, gutters, theme } from '../../themes/neonLaw';

import { AuthenticatedDropdown } from './authenticatedDropdown';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Container } from '../container';
import { Link } from '../link';
import { MdDehaze } from 'react-icons/md';
import { Search } from './search';
import styled from '@emotion/styled';
import { useAuth0 } from '@auth0/auth0-react';
import { useIntl } from 'gatsby-plugin-intl';

interface BaseNavigationBarProps {
  isRenderedOnDashboard?: boolean;
  links?: any;
  menus?: any;
  sideNavigationDrawer?: any;
}

const StyledHead = styled.div`
  grid-area: head;

  .wrap {
    padding: ${gutters.xSmallOne} ${gutters.xSmall};

    @media(max-width: 800px) {
      padding: .3rem .5rem;
    }
  }
`;

export const PortalNavigationBar = ({
  links = [] as any[],
  menus = [] as any[],
  sideNavigationDrawer,
}: BaseNavigationBarProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const intl = useIntl();

  const [loginButtonDisabled, disableLoginButton] = useState(false);
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <StyledHead>
      <Box
        top="2em"
        position="inherit"
        zIndex={4}
        bg={useColorModeValue(theme.colors.gray[100], theme.colors.black)}
        borderBottom={useColorModeValue('', '1px solid #222')}
        color="black"
        left="0"
        right="0"
        width="full"
        height="auto"
        className="wrap"
      >
        <Container isFullBleed={true}>
          <Flex boxSize="100%" align="center">
            <Box
              mr="5"
              as={Link}
              cursor="pointer"
              display="block"
              to="/"
              aria-label="Neon Law, Back to homepage"
              minWidth="3em"
            >
              <img src="/images/logo.svg" alt="Neon Law" />
            </Box>

            <Search
              version="desktop"
              isRenderedOnDashboard={true}
              background={useColorModeValue(
                colors.background.light,
                colors.background.dark,
              )}
              borderColor={useColorModeValue(theme.colors.gray[300], '')}
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
                    _hover={
                      {
                        '&:after': {
                          background: colors.primaryColor400,
                          right: 0,
                        },
                        color: colors.primaryColor400,
                      } as any
                    }
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

              {isLoading ? null : isAuthenticated ? (
                <AuthenticatedDropdown />
              ) : (
                <Flex>
                  <Box width="6px" />
                  <Button
                    bg="transparent"
                    border="1px"
                    className="nav-content-desktop"
                    disabled={loginButtonDisabled}
                    onClick={() => {
                      disableLoginButton(true);
                      loginWithRedirect();
                    }}
                  >
                    {intl.formatMessage({ id: 'auth.login' })}
                  </Button>
                </Flex>
              )}

              <IconButton
                aria-label="Navigation Menu"
                className="portal-hamburger"
                fontSize="20px"
                variant="ghost"
                icon={<MdDehaze />}
                textColor={useColorModeValue('#000', '#fff')}
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
    </StyledHead>
  );
};
