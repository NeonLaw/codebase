/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  Box,
  Button as ChakraButton,
  useColorMode,
} from '@chakra-ui/core';
import { colors, gutters, shadows } from '../themes/neonLaw';

import { Link } from './link';
import React from 'react';

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

export const ReadMoreButton = ({ children, ...props }: any) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      {...props}
      as={Link}
      borderBottom={`2px solid ${colors.cyanLight}`}
      display="inline-block"
      marginTop={gutters.xSmall}
      padding=".4rem .3rem"
      position="relative"
      transition="all .2s"
      zIndex={1}
      _after={{
        content: '""',
        display: 'block',
        height: '100%',
        left: 0,
        position: 'absolute',
        right: '100%',
        top: 0,
        transition: 'all .2s',
        zIndex: -1,
      }}
      _hover={{
        '&::after': {
          background: colors.cyanLight,
          right: 0,
        },
        boxShadow: shadows.light1,
        color: colors.text[colorMode],
      }}
    >
      {children ? children : 'Read More'}{' '}
      <Box as="span" fontFamily="sans-serif">
        &nbsp;&rarr;
      </Box>
    </Box>
  );
};
