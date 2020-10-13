import { Box } from '@chakra-ui/core';
import React from 'react';

export const SideNavContainer = ({ children }) => (
  <Box
    position="absolute"
    left="0"
    height="100%"
    top="0"
    right="0"
    display={['none', 'none', 'block']}
    maxWidth="12em"
  >
    {children}
  </Box>
);
