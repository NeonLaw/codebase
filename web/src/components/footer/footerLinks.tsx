import {
  Box,
  Divider,
  Flex,
  Spacer,
  Text,
  theme,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Container } from '../container';
import { EmailListButton } from '../emailListButton';
import { FooterLink } from './footerLink';
import { LanguageDropdown } from '../languageDropdown';
import React from 'react';
import { SocialMediaIcons } from '../socialMediaIcons';
import { ThemeSwitcher } from '../themeSwitcher';
import { useIntl } from 'react-intl';

export const FooterLinks = () => {
  const intl = useIntl();

  return (
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
              { intl.formatMessage({id: 'footer.support'}) }
            </Box>
            <FooterLink
              i18nMessage="footer.pro_bono"
              path="https://www.neonlaw.com/pro-bono"
            />
            <FooterLink
              i18nMessage="footer.upward_mobility"
              path="https://www.neonlaw.com/upward-mobility"
            />
          </Flex>
          <Spacer />
          <Flex direction="column">
            <FooterLink
              i18nMessage="footer.about"
              path="https://www.neonlaw.com/about-us"
            />
            <FooterLink
              i18nMessage="footer.practice_areas"
              path="https://www.neonlaw.com/practice-areas"
            />
            <FooterLink
              i18nMessage="footer.bar_prep"
              path="https://www.neonlaw.com/bar-prep"
            />
            <FooterLink
              i18nMessage="footer.templates"
              path="https://www.neonlaw.com/templates"
            />
          </Flex>
          <Spacer />
          <Flex direction="column">
            <FooterLink
              i18nMessage="footer.privacy_policy"
              path="https://www.neonlaw.com/privacy-policy"
            />
            <FooterLink
              i18nMessage="footer.terms"
              path="https://www.neonlaw.com/terms-of-service" />
            <FooterLink
              i18nMessage="footer.modern_slavery_statement"
              path="https://www.neonlaw.com/modern-slavery-statement"
            />
            <FooterLink i18nMessage="footer.pgp_key" path="/pgp" />
          </Flex>
          <Spacer />
          <Flex direction="column">
            <FooterLink
              i18nMessage="footer.delete_your_data.heading"
              path="https://www.deleteyourdata.com"
            />
            <FooterLink
              i18nMessage="footer.justice_for_rickie_slaughter.heading"
              path="https://www.justiceforrickieslaughter.com"
            />
            <FooterLink i18nMessage="footer.blog" path="/blog" />
            <FooterLink i18nMessage="footer.careers" path="/careers" />
          </Flex>
          <Box display={['none', 'none', 'flex']} />
        </Flex>
        <Box paddingBottom="1em">
          <ThemeSwitcher />
          <SocialMediaIcons />
          <EmailListButton />
          <Text textAlign="center">
            Copyright &copy; {new Date().getFullYear()} Shook Law PLLC under
            the&nbsp;
            <a
              href="https://github.com/NeonLaw/codebase/blob/main/LICENSE.md"
              target="_blank"
              rel="noreferrer"
            >
              Neon License
            </a>.
          </Text>
          <Divider margin="1.5em auto" width="240px" />
          <Text textAlign="center">
            UI by&nbsp;
            <a
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
              href="https://nisar.dev"
              target="_blank"
              rel="noreferrer"
            >
              Nisar
            </a>
            &nbsp;- API by&nbsp;
            <a
              style={{ cursor: 'pointer', textDecoration: 'underline' }}
              href="https://www.graphile.org/postgraphile/"
              target="_blank"
              rel="noreferrer"
            >
              Postgraphile
            </a>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
