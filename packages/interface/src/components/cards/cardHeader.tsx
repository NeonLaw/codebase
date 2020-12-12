import { Flex } from '@chakra-ui/core';
import React from 'react';

export const CardHeader = ({ children, ...rest }) => {
  return (
    <Flex borderBottomWidth="1px" {...rest}>
      {children}
    </Flex>
  );
};
