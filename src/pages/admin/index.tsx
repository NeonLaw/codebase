import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { AdminLayout } from '@layouts/admin';
import React from 'react';

const PortalPage = () => {
  return (
    <AdminLayout>
      <Box>
        <Heading>
          Admin Portal
        </Heading>

        <Text>
          Choose an Option on your Left.
        </Text>
      </Box>
    </AdminLayout>
  );
};

export default PortalPage;
