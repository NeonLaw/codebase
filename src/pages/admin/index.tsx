import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { PortalLayout } from '@layouts/portalLayout';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const AdminDashboard = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box>
        <Heading>
          {intl.formatMessage({ id: 'pages_admin.heading' })}
        </Heading>

        <Text>
          {intl.formatMessage({ id: 'pages_admin.text' })}
        </Text>
      </Box>
    </PortalLayout>
  );
};

export default AdminDashboard;
