/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box } from '@chakra-ui/core';
import { Link } from '../components/link';
import React from 'react';

export const DesktopHalfMobileFullCard = ({ children, to }) => {
  return (
    <Box
      flex={['0 0 100%', '0 0 100%', '0 0 100%', '0 48%']}
      cursor={to ? 'pointer' : null}
      as={to ? Link : null}
      to={to ? to : null}
      className="outline-bordered"
    >
      <Box
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        margin={['1em 0', '1em 0', '2em 0']}
      >
        {children}
      </Box>
    </Box>
  );
};
