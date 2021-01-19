/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, useColorMode } from '@chakra-ui/core';
import { colors, shadows } from '../themes/neonLaw';

import { Link } from '../components/link';
import React from 'react';

export const DesktopHalfMobileFullCard = ({ children, to }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      flex={['0 0 100%', '0 0 100%', '0 0 100%', '0 48%']}
      maxWidth="600px"
      cursor={to ? 'pointer' : null}
      as={to ? Link : null}
      to={to ? to : null}
      className="outline-bordered"
      margin={['1em 0', '1em 0', '2em 0']}
    >
      <Box
        borderWidth="1px"
        overflow="hidden"
        background={colors.background[colorMode]}
        borderColor={colors.borders[colorMode]}
        boxShadow={shadows.light2}
        height="100%"
      >
        {children}
      </Box>
    </Box>
  );
};
