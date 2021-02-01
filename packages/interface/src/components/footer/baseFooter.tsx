import {
  Box,
  Heading,
  Text,
  useColorMode
} from '@chakra-ui/core';
import { colors, sizes } from '../../themes/neonLaw';
import { FooterLinks } from './footerLinks';
import React from 'react';
import { Section } from '../section';
import { useIntl } from 'gatsby-plugin-intl';

interface BaseFooterProps {
  isWhite?: boolean;
}

export const BaseFooter = ({ isWhite }: BaseFooterProps) => {
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
            {intl.formatMessage({
              id: 'footer.neon_law.heading'
            })}
          </Heading>
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
