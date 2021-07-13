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
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { AuthenticatedDropdown } from './authenticatedDropdown';
import { BlackLivesMatter } from './blackLivesMatter';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Container } from '../container';
import { GetLayoutDirection } from '../../../utils/getLayoutDirection';
import Link from 'next/link';
import { MdDehaze } from 'react-icons/md';
import { default as NextLink } from 'next/link';
import { Search } from './search';
import { colors } from '../../styles/neonLaw';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';

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
}: BaseNavigationBarProps) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [loginButtonDisabled, disableLoginButton] = useState(false);
  const [hideSearch, setIsHideSearch] = useState(false);
  const intl = useIntl();
  const router = useRouter();
  const { isLoading, user } = useUser();
  const { locale } = router;
  const dir = GetLayoutDirection();

  useEffect(() => {
    if (router.pathname === '/') {
      setIsHideSearch(true);
    }
  }, [router.pathname]);

  return (
    <>
      <BlackLivesMatter />
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
            <NextLink href="/" aria-label="Neon Law, Back to homepage">
              <a href="/">
                <img
                  src="/images/logo.svg"
                  style={{
                    marginLeft: locale.name === 'Urdu' ? '1.25rem' : 0,
                    marginRight: locale.name !== 'Urdu' ? '1.25rem' : 0,
                    width: '48px',
                  }}
                  alt="Neon Law"
                />
              </a>
            </NextLink>

            {!hideSearch ? (
              <Search
                version="desktop"
                isRenderedOnDashboard={false}
                background={colors.background.dark}
              />
            ) : null}

            <Flex flexGrow={1} align="center" justify="flex-end">
              {links.map((link, i) => (
                <Box className="nav-content-desktop" key={i} mr="0.5em">
                  <Link
                    href={link.route}
                    passHref
                    // activeClassName="nav-link--active"
                  >
                    <Box
                      as="a"
                      display="block"
                      cursor="pointer"
                      margin="0 10px"
                      paddingBottom="0.5em"
                      textDecoration="none"
                      position="relative"
                      _after={{
                        background: 'white',
                        bottom: 0,
                        content: '""',
                        display: 'block',
                        height: '1px',
                        left: dir === 'rtl' ? '100%' : 0,
                        position: 'absolute',
                        right: dir === 'rtl' ? 0 : '100%',
                        transition: 'all 0.4s cubic-bezier(0, 0.5, 0, 1)',
                      }}
                      _hover={
                        {
                          '&:after': {
                            background: colors.primaryColor400,
                            left: 0,
                            right: 0,
                          },
                          color: colors.primaryColor400,
                        } as any
                      }
                    >
                      {link.label}
                    </Box>
                  </Link>
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
                        <MenuItem key={j} as={NextLink} href={link.route}>
                          <a href={link.route}>{link.label}</a>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                </Box>
              ))}

              {isLoading ? null : user ? (
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
                      router.push('/api/auth/login');
                    }}
                  >
                    {intl.formatMessage({ id: 'auth.login' })}
                  </Button>
                </Flex>
              )}
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
