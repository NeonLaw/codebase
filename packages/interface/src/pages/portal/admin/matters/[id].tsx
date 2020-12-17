import { Box } from '@chakra-ui/core';
import { Breadcrumbs } from '../../../../components/breadcrumbs';
import { PortalLayout } from '../../../../layouts/portalLayout';
import React from 'react';

const AdminMattersDetail = () => {
  return (
    <PortalLayout>
      <Box textAlign="left">
        <Breadcrumbs showHome={false} />

        <h1>hi</h1>
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminMattersDetail;
