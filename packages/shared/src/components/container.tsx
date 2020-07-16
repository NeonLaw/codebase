import { Box } from '@chakra-ui/core';
import React from 'react';

export const Container = ({ children }) => (
  <Box
    maxWidth="var(--grid-max-width)"
    margin="auto"
    width={['95%', '95%', '90%']}
  >
    {children}
  </Box>
);

