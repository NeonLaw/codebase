import {
  Box,
  Heading,
  Text,
  useColorMode
} from '@chakra-ui/react';
import { colors, sizes } from '../../styles/neonLaw';
import { Breadcrumbs } from '../../components/breadcrumbs';
import { FooterLinks } from './footerLinks';
import React from 'react';
import { Section } from '../section';
import { useIntl } from 'react-intl';

interface TrustFooterProps {
  isWhite?: boolean;
}

export const TrustFooter = ({ isWhite }: TrustFooterProps) => {
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
          <Heading
            as="h2"
            className="h3"
            fontWeight="normal"
            color={colors.text[colorMode]}
          >
            The Shook Family Trust is managed by Neon Law.
          </Heading>
          <Breadcrumbs />
          <Text>
            {intl.formatMessage({
              id: 'footer.neon_law.text'
            })}
          </Text>
        </Box>
      </Section>
      <FooterLinks />
    </Box>
  );
};
