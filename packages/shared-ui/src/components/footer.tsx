/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Flex, Heading, Text, theme, useColorMode } from '@chakra-ui/core';
import { colors, gutters, sizes } from '../themes/neonLaw';

import { Container } from './container';
import { LanguageDropdown } from './languageDropdown';
import { Link } from './link';
import React from 'react';
import { Section } from './section';
import { SocialMediaIcons } from './socialMediaIcons';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';

const StyledLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 1rem;
  font-size: ${theme.fontSizes['lg']};

  @media (max-width: 640px) {
    flex-direction: column;
  }

  & > * {
    flex: 0 0 25%;

    @media (max-width: 1000px) {
      flex: 0 0 50%;
      text-align: center;

      &:nth-of-type(1),
      &:nth-of-type(2) {
        margin-bottom: ${gutters.medium};
      }
    }

    @media (max-width: 640px) {
      &:nth-of-type(1),
      &:nth-of-type(2) {
        margin-bottom: 0;
      }
    }
  }
`;

export const Footer = ({ isWhite }: { isWhite?: boolean | undefined }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = { dark: 'white', light: 'black' };
  const intl = useIntl();

  const fathomLink = 'https://app.usefathom.com/share/dublghdj/www.neonlaw.com';

  return (
    <Box
      color={color[colorMode]}
      bg={!isWhite ? colors.lighterBg[colorMode] : colors.background[colorMode]}
      borderTop={`1px solid ${colors.borders[colorMode]}`}
      width="100%"
      textAlign="left"
      as="footer"
    >
      <Section>
        <Box maxWidth={sizes.textContainerSmall}>
          <Heading as="h3" fontWeight="normal">
            {intl.formatMessage({ id: 'footer.heading' })}
          </Heading>
          <Text>{intl.formatMessage({ id: 'footer.text' })}</Text>
        </Box>
      </Section>
      <Box bg="black" color="white">
        <Container>
          <StyledLinks>
            <Flex direction="column">
              <SocialMediaIcons display={['block', 'block', 'none']} mb="7px" />
              <Box as={Link} to="/about-us" padding="7px 0">
                {intl.formatMessage({ id: 'footer.about' })}
              </Box>
              <Box as={Link} to="/practice-areas" padding="7px 0">
                {intl.formatMessage({ id: 'footer.practice_areas' })}
              </Box>
              <Box as={Link} to="/bar-prep" padding="7px 0">
                {intl.formatMessage({ id: 'footer.bar_prep' })}
              </Box>
              <Box as={Link} to="/templates" padding="7px 0">
                Legal Templates
              </Box>
            </Flex>
            <Flex direction="column">
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
              <Box as={Link} to="/pgp" padding="7px 0">
                PGP Key
              </Box>
              <Box as={Link} to="/pro-bono" padding="7px 0">
                {intl.formatMessage({ id: 'footer.pro_bono' })}
              </Box>
            </Flex>
            <Flex direction="column">
              <SocialMediaIcons display={['none', 'none', 'block']} />
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
          </StyledLinks>
          <Box paddingBottom="1em">
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
        </Container>
      </Box>
    </Box>
  );
};
