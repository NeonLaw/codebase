import { Box, Button, Heading, Text } from '@chakra-ui/core';
import { colors, gutters, sizes } from '@themes/neonLaw';

import BannerBg from '../../images/banner.jpg';
import { Container } from '@components/container';
import React from 'react';
import { theme } from '@chakra-ui/core';

interface BannerProps {
  title: string;
  text: string;
  buttonText: JSX.Element;
}

export const Banner = ({ title, text, buttonText }: BannerProps) => (
  <Box
    as="header"
    role="banner"
    display="flex"
    alignItems="center"
    maxHeight="1200px"
    height="100vh"
    color={colors.text.dark}
    background={`linear-gradient(to right, rgba(0,0,0, .6), rgba(0,0,0, .9)), url(${BannerBg})`}
    backgroundSize="cover"
    backgroundPosition="left"
    backgroundAttachment="fixed"
  >
    <Container>
      <Box maxWidth={sizes.textContainerSmall}>
        <Heading as="h1" fontSize={theme.fontSizes.xl}>
          {title}
        </Heading>
        <Text
          margin={`${gutters.xSmall} 0 ${gutters.small}`}
          color={colors.text.darkLight}
        >
          {text}
        </Text>
        <Button
          bg={colors.orange}
          _hover={{
            bg: colors.orangeDark,
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Container>
  </Box>
);
