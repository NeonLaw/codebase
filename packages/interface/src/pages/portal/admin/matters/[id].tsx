import { Box } from '@chakra-ui/core';
import { Breadcrumbs } from '../../../../components/breadcrumbs';
import {
  DeleteMatterButton
} from '../../../../components/deleteButtons/deleteMatterButton';
import { PortalLayout } from '../../../../layouts/portalLayout';
import React from 'react';

const AdminMattersDetail = ({ params: { id }}) => {
  return (
    <PortalLayout>
      <Box textAlign="left">
        <Breadcrumbs showHome={false} />

        <DeleteMatterButton id={id} />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminMattersDetail;
