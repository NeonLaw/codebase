import { Box, Text } from '@chakra-ui/core';
import { colors, gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';

import InActionBG from '../../images/in-action-bg.jpg';
import React from 'react';

const InAction = () => (
  <Box
    as="section"
    textAlign="center"
    background={`linear-gradient(rgba(0,0,0, .9), rgba(0,0,0, .7)),url(${InActionBG})`}
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundAttachment="fixed"
    padding={`${gutters.largeOne} 0`}
    color={colors.text.dark}
  >
    <h2>NeonLaw in Action</h2>
    <Text maxWidth="500px" minWidth="auto" margin={`${gutters.xSmall} auto 0`}>
      We have been reimagnig legal work for the past 00 Years. Lorem ipsum dolor
      sit amet consectetur adipisicing elit.
    </Text>
  </Box>
);

export default InAction;
