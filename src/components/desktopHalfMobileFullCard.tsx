/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box } from '@chakra-ui/core';
import { Link } from '@components/link';
import React from 'react';

export const DesktopHalfMobileFullCard = ({
  children,
  to
}) => {
  return (
    <Box
      flex={['0 0 100%', '0 0 100%', '0 0 100%', '0 50%']}
      cursor="pointer"
      as={Link}
      to={to}
    >
      <Box
        borderWidth="1px"
        rounded="lg"
        overflow="hidden"
        margin={['1em', '1em', '2em']}
      >
        {children}
      </Box>
    </Box>
  );
};
