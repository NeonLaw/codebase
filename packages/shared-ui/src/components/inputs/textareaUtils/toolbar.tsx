import { Flex } from '@chakra-ui/core';
import React from 'react';

export const Toolbar = (props) => (
  <Flex
    width="100%"
    justifyContent="left"
    padding="20px"
    {...props}
  />
);
