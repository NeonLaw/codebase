import { Box } from '@chakra-ui/core';
import React from 'react';

export const Container = ({ 
  children, 
  isFullBleed 
}: {children: JSX.Element | JSX.Element[]; isFullBleed?: any}) => (
  <Box
    maxWidth={!isFullBleed ? 'var(--grid-max-width)' : 'auto'}
    margin="auto"
    width={!isFullBleed ? ['95%', '95%', '90%'] : []}
  >
    {children}
  </Box>
);

