/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/core';

import { Container } from './container';
import { LanguageDropdown } from '@components/languageDropdown';
import { Link } from '@components/link';
import React from 'react';
import { Section } from './section';
import { SocialMediaIcons } from '@components/socialMediaIcons';
import { sizes } from '@themes/neonLaw';
import { useIntl } from 'gatsby-plugin-intl';

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = { dark: 'white', light: 'black' };
  const bg = { dark: 'black', light: 'gray.300' };
  const lighterBg = { dark: 'gray.700', light: 'gray.50' };
  const intl = useIntl();
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
      <Box bg={bg[colorMode]}>
        <Container>
          <Flex
            direction={['column', 'column', 'row']}
            padding="2em 1em"
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
              <LanguageDropdown />
              <Text onClick={toggleColorMode} cursor="pointer" padding="7px 0">
                {intl.formatMessage({ id: 'footer.switch' })}
                {`${
                  colorMode === 'dark'
                    ? intl.formatMessage({ id: 'footer.light' })
                    : intl.formatMessage({ id: 'footer.dark' })
                }`}
                {intl.formatMessage({ id: 'footer.mode' })}
              </Text>
            </Flex>
            <Box display={['none', 'none', 'flex']} />
          </Flex>
        </Container>
      </Box>
      <Box paddingBottom="1em" bg={bg[colorMode]}>
        <Text textAlign="center">
          Copyright &copy; {new Date().getFullYear()} Shook Law PLLC
        </Text>
      </Box>
    </Box>
  );
};
