import { Box, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { colors } from '@themes/neonLaw';

export const Background = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="main"
      role="main"
      bg={colors.background[colorMode]}
      color={colors.text[colorMode]}
    >
      {children}
    </Box>
  );
};
