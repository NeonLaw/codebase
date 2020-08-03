import { Button as ChakraButton, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { colors } from '../themes/neonLaw';

export const Button = ({ children, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <ChakraButton
      {...props}
      bg={colors.primaryButtonBg[colorMode]}
      _hover={{ backgroundColor: colors.primaryButtonBgOnHover[colorMode] }}
      _focus={{
        backgroundColor: colors.primaryButtonBg.lightBlue,
        color: colors.primaryButtonColor.light,
        outline: 'none',
      }}
      color={colors.primaryButtonColor[colorMode]}
    >
      {children}
    </ChakraButton>
  );
};
