import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { BlackLivesMatter } from './blackLivesMatter';
import { Container } from '../container';
import Link from 'next/link';
import { MdDehaze } from 'react-icons/md';
import { SideNavContainer } from '../sideNavigation/sideNavContainer';
import { SideNavContent } from '../sideNavigation/sideNavContent';
import { colors } from '../../styles/neonLaw';
import { useIntl } from 'react-intl';

export const RickieNavigationBar = () => {
  const intl = useIntl();

  // eslint-disable-next-line max-len
  const changeDotOrgHref = 'https://www.change.org/p/people-interested-in-criminal-justice-free-rickie-slaughter';

  const links = [
    {
      label: intl.formatMessage({
        id: 'navigation.justice_for_rickie_slaughter.home'
      }),
      route: '/'
    },
    {
      label: intl.formatMessage({
        id: 'navigation.justice_for_rickie_slaughter.coronavirus'
      }),
      route: '/jfrs/coronavirus-in-prison'
    },
    {
      label: intl.formatMessage({
        id: 'navigation.justice_for_rickie_slaughter.patrick_wayne_harper'
      }),
      route: '/jfrs/patrick-wayne-harper'
    },
    {
      label: intl.formatMessage({
        id: 'navigation.justice_for_rickie_slaughter.write_rickie'
      }),
      route: '/jfrs/write-rickie'
    }
  ];
  const { isOpen, onToggle, onClose } = useDisclosure();

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
                  >
                    {link.label}
                  </Box>
                </Link>
              </Box>
            ))}

            <Flex flexGrow={1} align="center" justify="flex-end">
              <a
                href={changeDotOrgHref}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="ghost"
                  _hover={{
                    bg: 'white',
                    color: 'black',
                  }}
                >
                Sign Rickie&apos;s Change.org Petition
                </Button>
              </a>
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
          <DrawerBody padding="0">
            <SideNavContainer>
              <SideNavContent links={links} />
            </SideNavContainer>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
