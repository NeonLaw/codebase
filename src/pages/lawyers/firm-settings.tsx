import {
  Box,
  Heading,
} from '@chakra-ui/core';
import { LawyersLayout } from '@layouts/lawyers';
import React from 'react';

const LawyersFirmSettings = () => {

  return (
    <LawyersLayout>
      <Box>
        <Heading>
          Lawyer Firm Settings
        </Heading>
      </Box>
    </LawyersLayout>
  );
};

export default LawyersFirmSettings;
