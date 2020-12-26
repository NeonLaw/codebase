import { Flex, Text } from '@chakra-ui/core';

import React from 'react';

export const BlackLivesMatter = () => (
  <Flex
    as="header"
    position="fixed"
    bg="black"
    color="white"
    height="2em"
    width="full"
    zIndex={4}
    alignItems="center"
  >
    <Text flex="1" textAlign="center">
      Black Lives Matter
    </Text>
  </Flex>
);
