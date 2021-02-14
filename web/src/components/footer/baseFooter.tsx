import {
  Box,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { colors, sizes } from '../../styles/neonLaw';

import { FooterLinks } from './footerLinks';
import React from 'react';
import { Section } from '../section';

interface BaseFooterProps {
  isWhite?: boolean;
  hideTheSection?: boolean;
}

export const BaseFooter = ({ isWhite, hideTheSection }: BaseFooterProps) => {
  const { colorMode } = useColorMode();
  const color = { dark: 'white', light: 'black' };

  return (
    <Box
      color={color[colorMode]}
      bg={!isWhite ? colors.lighterBg[colorMode] : colors.background[colorMode]}
      borderTop={`1px solid ${useColorModeValue(colors.borders.light, '#222')}`}
      width="100%"
      textAlign="left"
      as="footer"
    >
      {hideTheSection ? null : (
        <Section>
          <Box maxWidth={sizes.textContainerSmall}>
            <Heading
              as="h2"
              className="h3"
              fontWeight="normal"
              color={colors.text[colorMode]}
            >
              footer.neon_law.heading
            </Heading>
            <Text>
              footer.neon_law.text
            </Text>
          </Box>
        </Section>
      )}
      <FooterLinks />
    </Box>
  );
};
