import { Box, Heading } from '@chakra-ui/core';
import { navigate, useIntl } from 'gatsby-plugin-intl';

import { Button } from '../../../components/button';
import { PortalLayout } from '../../../layouts/portalLayout';
import React from 'react';
import { gutters } from '../../../themes/neonLaw';

const AdminDashboard = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages_admin.heading' })}
        </Heading>

        <Button
          flash={false}
          colorScheme="gray"
          onClick={() => {
            navigate('/portal/admin/questions');
          }}
        >
          Questions
        </Button>

        <Button
          flash={false}
          colorScheme="gray"
          onClick={() => {
            navigate('/portal/admin/matter-document-templates');
          }}
        >
          Matter Document Templates
        </Button>

        <Button
          flash={false}
          colorScheme="gray"
          onClick={() => {
            navigate('/portal/admin/matter-templates');
          }}
        >
          Matter Templates
        </Button>

        <Button
          flash={false}
          colorScheme="gray"
          onClick={() => {
            navigate('/portal/admin/people');
          }}
          data-testid="admin-people-link-button"
        >
          People
        </Button>

        <Button
          flash={false}
          colorScheme="gray"
          onClick={() => {
            navigate('/portal/admin/matters');
          }}
          data-testid="admin-matters-link-button"
        >
          Matters
        </Button>
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminDashboard;
