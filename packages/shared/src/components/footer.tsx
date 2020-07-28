/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/core';

import { Container } from './container';
import { LanguageDropdown } from './languageDropdown';
import { Link } from './link';
import React from 'react';
import { Section } from './section';
import { SocialMediaIcons } from './socialMediaIcons';
import { sizes } from '../themes/neonLaw';
import { useIntl } from 'gatsby-plugin-intl';

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = { dark: 'white', light: 'black' };
  const lighterBg = { dark: 'gray.700', light: 'gray.50' };
  const intl = useIntl();

  const fathomLink = 'https://app.usefathom.com/share/dublghdj/www.neonlaw.com';

  return (
    <Box
      bg={lighterBg[colorMode]}
      color={color[colorMode]}
      width="100%"
      textAlign="left"
      as="footer"
    >
      <Section>
        <Box maxWidth={sizes.textContainerSmall}>
          <Heading as="h3" fontWeight="medium">
            {intl.formatMessage({ id: 'footer.heading' })}
          </Heading>
          <Text>{intl.formatMessage({ id: 'footer.text' })}</Text>
        </Box>
      </Section>
      <Box bg="black" color="white">
        <Container>
          <Flex
            direction={['column', 'column', 'row']}
            padding="3em 1em"
            justifyContent="space-between"
            textAlign={['center', 'center', 'left']}
            fontSize="lg"
          >
            <Flex direction="column">
              <SocialMediaIcons display={['block', 'block', 'none']} mb="7px" />
              <Box as={Link} to="/about-us" padding="7px 0">
                {intl.formatMessage({ id: 'footer.about' })}
              </Box>
              <Box as={Link} to="/practice-areas" padding="7px 0">
                {intl.formatMessage({ id: 'footer.practice_areas' })}
              </Box>
              <Box as={Link} to="/pro-bono" padding="7px 0">
                {intl.formatMessage({ id: 'footer.pro_bono' })}
              </Box>
              <Box as={Link} to="/bar-prep" padding="7px 0">
                {intl.formatMessage({ id: 'footer.bar_prep' })}
              </Box>
              <Box as={Link} to="/templates" padding="7px 0">
                Legal Templates
              </Box>
              <Box as={Link} to="/pgp" padding="7px 0">
                PGP Key
              </Box>
            </Flex>
            <Flex direction="column">
              <LanguageDropdown />
              <Box
                as="a"
                href="https://neonlaw.zendesk.com/"
                target="_blank"
                rel="noopener noreferrer"
                padding="7px 0"
              >
                {intl.formatMessage({ id: 'footer.support' })}
              </Box>
              <Box
                as="a"
                href="https://www.deleteyourdata.com"
                target="_blank"
                rel="noopener noreferrer"
                padding="7px 0"
              >
                Delete Your Data
              </Box>
              <Box
                as="a"
                href="https://www.lawjobresources.com"
                target="_blank"
                rel="noopener noreferrer"
                padding="7px 0"
              >
                Law Job Resources
              </Box>
              <Box
                as="a"
                href="https://www.justiceforrickieslaughter.com"
                target="_blank"
                rel="noopener noreferrer"
                padding="7px 0"
              >
                Justice For Rickie Slaughter
              </Box>
            </Flex>
            <Flex direction="column">
              <Box
                as="a"
                href="https://neonlaw.zendesk.com/"
                target="_blank"
                rel="noopener noreferrer"
                padding="7px 0"
              >
                {intl.formatMessage({ id: 'footer.support' })}
              </Box>
              <Box as={Link} to="/privacy-policy" padding="7px 0">
                {intl.formatMessage({ id: 'footer.privacy_policy' })}
              </Box>
              <Box as={Link} to="/terms-of-service" padding="7px 0">
                {intl.formatMessage({ id: 'footer.terms' })}
              </Box>
            </Flex>
            <Flex direction="column">
              <SocialMediaIcons display={['none', 'none', 'block']} />
              <Text onClick={toggleColorMode} cursor="pointer" padding="7px 0">
                {intl.formatMessage({ id: 'footer.switch' })}
                {`${
                  colorMode === 'dark'
                    ? intl.formatMessage({ id: 'footer.light' })
                    : intl.formatMessage({ id: 'footer.dark' })
                }`}
                {intl.formatMessage({ id: 'footer.mode' })}
              </Text>
              <Box as={Link} to="/privacy-policy" padding="7px 0">
                {intl.formatMessage({ id: 'footer.privacy_policy' })}
              </Box>
              <Box as={Link} to="/terms-of-service" padding="7px 0">
                {intl.formatMessage({ id: 'footer.terms' })}
              </Box>
              <Box as={Link} to="/modern-slavery-statement" padding="7px 0">
                Modern Slavery Statement
              </Box>
            </Flex>
            <Box display={['none', 'none', 'flex']} />
          </Flex>
        </Container>
        <Box paddingBottom="1em" bg={bg[colorMode]}>
          <Text textAlign="center">
            Copyright &copy; {new Date().getFullYear()} Shook Law PLLC
          </Text>
          <Text textAlign="center">
            This website is monitored with&nbsp;
            <a
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
              href={fathomLink}
              target="_blank"
              rel="noreferrer"
            >
              Fathom Analytics
            </a>
            .
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
