import { Flex } from '@chakra-ui/react';
import React from 'react';

export const Toolbar = (props) => (
  <Flex
    width="100%"
    justifyContent="left"
    padding="20px"
    {...props}
  />
);
