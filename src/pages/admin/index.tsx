import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { Link } from 'gatsby';
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

        <Link to="/admin/flashcards">
          Flashcards
        </Link>
      </Box>
    </PortalLayout>
  );
};

export default AdminDashboard;
