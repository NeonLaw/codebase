import { Box } from '@chakra-ui/core';
import React from 'react';

export const SideNavContainer = ({ children }) => (
  <Box
    position="fixed"
    left="0"
    height="100%"
    top="0"
    right="0"
    display={['none', 'none', 'block']}
    paddingTop={['0', '0', '6em']}
    maxWidth="10em"
  >
    {children}
  </Box>
);
