import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { colors, gutters, sizes } from '../../styles/neonLaw';

import { BaseFooter } from '../footer/baseFooter';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import { Seo } from '../seo';
import { TypeAhead } from '../typeAhead';
import { useColorMode } from '@chakra-ui/react';
import { useIntl } from 'react-intl';
import { useRef } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export const NeonLawIndexPage = (): JSX.Element => {
  const { colorMode } = useColorMode();
  const intl = useIntl();

  const { user } = useUser();
  const nextSectionRef = useRef(null);

  return (
    <>
      <Seo title="Homepage" />
      <Center
        background={colors.background[colorMode]}
        as="main"
        display="flex"
        alignItems="center"
        height="100vh"
        color={colors.text[colorMode]}
      >
        <VStack maxWidth={['400px', '500px', sizes.textContainerSmall]}>
          <Box width="100%">
            <Flex alignItems="center" height="250px">
              <Spacer />
              <ReactSVG src="/images/logo.svg" />
              <Box>
                <Heading as="h1" fontWeight="400" justifyItems="center">
                  {intl.formatMessage({ id: 'banner.h1' })}
                </Heading>
                <Heading as="h4" fontWeight="400" justifyItems="center">
                  {intl.formatMessage({ id: 'banner.title' })}
                </Heading>
              </Box>
              <Spacer />
            </Flex>
            <TypeAhead />
            <Text
              margin={`${gutters.xSmall} 0 ${gutters.small}`}
              color={colors.text[colorMode]}
              display={['none', 'none', 'inherit']}
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: 'banner.text' }),
              }}
            />
            <Text>
              <span>{intl.formatMessage({ id: 'banner.client' })}</span>
              &nbsp;
              {user ? (
                <>
                  <Link href="/portal" passHref={true}>
                    <a href="/portal" style={{ textDecoration: 'underline' }}>
                      {intl.formatMessage({ id: 'banner.view_matters' })}
                    </a>
                  </Link>
                  <span>&nbsp;or&nbsp;</span>
                  <Link href="/api/auth/logout" passHref={true}>
                    <a
                      href="/api/auth/logout"
                      style={{ textDecoration: 'underline' }}
                    >
                      {intl.formatMessage({ id: 'banner.logout' })}
                    </a>
                  </Link>
                </>
              ) : (
                <Link href="/api/auth/login">
                  <a
                    href="/api/auth/login"
                    style={{ textDecoration: 'underline' }}
                  >
                    {intl.formatMessage({ id: 'banner.signin' })}
                  </a>
                </Link>
              )}
              .
            </Text>
            <Box width="100%" height="100px" />
          </Box>
        </VStack>
      </Center>
      <Flex marginTop="-3em" width="100%">
        <IconButton
          aria-label="Learn More"
          margin="0 auto"
          icon={<ChevronDownIcon />}
          onClick={() => {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </Flex>
      <Box ref={nextSectionRef} marginTop="3em">
        <BaseFooter />
      </Box>
    </>
  );
};
