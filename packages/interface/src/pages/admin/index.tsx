import {
  Box,
  Button,
  Heading,
  Text,
} from '@chakra-ui/core';
import { navigate, useIntl } from 'gatsby-plugin-intl';

import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import React from 'react';
import { gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';

const AdminDashboard = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages_admin.heading' })}
        </Heading>

        <Text marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages_admin.text' })}
        </Text>

        <Button onClick={() => {
          navigate('/admin/flashcards');
        }}>
          Flashcards
        </Button>
      </Box>
    </PortalLayout>
  );
};

export default AdminDashboard;
