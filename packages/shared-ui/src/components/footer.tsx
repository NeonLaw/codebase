/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
  theme,
  useBreakpointValue,
  useColorMode
} from '@chakra-ui/core';
import { colors, sizes } from '../themes/neonLaw';

import { Container } from './container';
import { LanguageDropdown } from './languageDropdown';
import { Link } from './link';
import React from 'react';
import { Section } from './section';
import { SocialMediaIcons } from './socialMediaIcons';
import { ThemeSwitcher } from './theme-switcher';
import { useIntl } from 'gatsby-plugin-intl';

const FooterLink = ({ currentSite, site, path, i18nMessage }) => {
  const intl = useIntl();

  if (site === currentSite) {
    return (
      <Box as={Link} to={path} padding="7px 0">
        {intl.formatMessage({ id: i18nMessage })}
      </Box>
    );
  }
  const siteMap = {
    'delete-your-data': 'https://www.deleteyourdata.com',
    'justice-for-rickie-slaughter': 'https://www.JusticeForRickieSlaughter.com',
    'law-job-resources': 'https://www.lawjobresources.com',
    'neon-law': 'https://www.neonlaw.com',
  };

  return (
    <Box
      as="a"
      href={`${siteMap[site]}${path}`}
      target="_blank"
      rel="noopener noreferrer"
      padding="7px 0"
    >
      {intl.formatMessage({ id: i18nMessage })}
    </Box>
  );
};

interface FooterProps {
  isWhite?: boolean;
  currentSite: string;
  fathomLink: string;
}

export const Footer = ({ isWhite, currentSite, fathomLink }: FooterProps) => {
  const { colorMode } = useColorMode();
  const color = { dark: 'white', light: 'black' };
  const intl = useIntl();

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
          <Flex
            padding="3em 1em"
            fontSize={theme.fontSizes['lg']}
            direction={useBreakpointValue({ base: 'column', lg: 'row' })}
          >
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
              <FooterLink
                currentSite={currentSite}
                site="neon-law"
                i18nMessage="footer.pro_bono"
                path="/pro-bono"
              />
              <FooterLink
                currentSite={currentSite}
                site="neon-law"
                i18nMessage="footer.upward_mobility"
                path="/upward-mobility"
              />
            </Flex>
            <Spacer />
            <Flex direction="column">
              <SocialMediaIcons display={['block', 'block', 'none']} mb="7px" />
              <FooterLink
                currentSite={currentSite}
                site="neon-law"
                i18nMessage="footer.about"
                path="/about-us"
              />
              <FooterLink
                currentSite={currentSite}
                site="neon-law"
                i18nMessage="footer.practice_areas"
                path="/practice-areas"
              />
              <FooterLink
                currentSite={currentSite}
                site="neon-law"
                i18nMessage="footer.bar_prep"
                path="/bar-prep"
              />
              <FooterLink
                currentSite={currentSite}
                site="neon-law"
                i18nMessage="footer.templates"
                path="/templates"
              />
            </Flex>
            <Spacer />
            <Flex direction="column">
              <FooterLink
                currentSite={currentSite}
                site="neon-law"
                i18nMessage="footer.privacy_policy"
                path="/privacy-policy"
              />
              <FooterLink
                currentSite={currentSite}
                site="neon-law"
                i18nMessage="footer.terms"
                path="/terms-of-service"
              />
              <FooterLink
                currentSite={currentSite}
                site="neon-law"
                i18nMessage="footer.modern_slavery_statement"
                path="/modern-slavery-statement"
              />
              <FooterLink
                currentSite={currentSite}
                site="neon-law"
                i18nMessage="footer.pgp_key"
                path="/pgp"
              />
            </Flex>
            <Spacer />
            <Flex direction="column">
              <FooterLink
                currentSite={currentSite}
                site="delete-your-data"
                i18nMessage="footer.delete_your_data"
                path="/"
              />
              <FooterLink
                currentSite={currentSite}
                site="law-job-resources"
                i18nMessage="footer.law_job_resources"
                path="/"
              />
              <FooterLink
                currentSite={currentSite}
                site="justice-for-rickie-slaughter"
                i18nMessage="footer.justice_for_rickie_slaughter"
                path="/"
              />
              <SocialMediaIcons display={['none', 'none', 'block']} />
            </Flex>
            <Box display={['none', 'none', 'flex']} />
          </Flex>
          <Box paddingBottom="1em">
            <ThemeSwitcher />
            <Text textAlign="center">
              Copyright &copy; {new Date().getFullYear()} Shook Law PLLC
            </Text>
            <Text textAlign="center">
              This privacy-preserving website is monitored with&nbsp;
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
