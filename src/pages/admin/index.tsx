import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { AdminLayout } from '@layouts/admin';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const AdminDashboard = () => {
  const intl = useIntl();
  return (
    <AdminLayout>
      <Box>
        <Heading>
          {intl.formatMessage({ id: 'pages_admin.heading' })}
        </Heading>

        <Text>
          {intl.formatMessage({ id: 'pages_admin.text' })}
        </Text>
      </Box>
    </AdminLayout>
  );
};

export default AdminDashboard;
