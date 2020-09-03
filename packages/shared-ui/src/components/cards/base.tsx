import { Flex } from '@chakra-ui/core';
import React from 'react';
import { animated } from 'react-spring';
import { useFadeUp } from '../../utils/useFadeUp';

const AnimatedFlex = animated(Flex);

export const Card = ({ children, ...rest }) => {
  const fade = useFadeUp();
  return (
    <AnimatedFlex style={fade} {...rest}>
      {children}
    </AnimatedFlex>
  );
};
