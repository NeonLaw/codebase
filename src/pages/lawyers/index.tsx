import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { LawyersLayout } from '@layouts/lawyers';
import React from 'react';

const LawyersPage = () => {

  return (
    <LawyersLayout>
      <Box>
        <Heading>
          Lawyer Portal
        </Heading>

        <Text>
          Create a new Wills Packet
        </Text>
      </Box>
    </LawyersLayout>
  );
};

export default LawyersPage;
