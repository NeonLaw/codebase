import { Flex } from '@chakra-ui/core';
import React from 'react';

export const CardFooter = ({ children, ...rest }) => {
  return (
    <Flex borderTopWidth="1px" overflowX="hidden" overflowY="hidden" {...rest}>
      {children}
    </Flex>
  );
};
