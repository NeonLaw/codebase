import { Box } from '@chakra-ui/core';
import { Breadcrumbs } from '../../../../components/breadcrumbs';
import {
  DeleteMatterButton
} from '../../../../components/deleteButtons/deleteMatterButton';
import {
  MatterDetailView
} from '../../../../components/detailViews/matterDetailView';
import { PortalLayout } from '../../../../layouts/portalLayout';
import React from 'react';

const AdminMattersDetail = ({ params: { id }}) => {
  return (
    <PortalLayout>
      <Box>
        <Breadcrumbs showHome={false} />

        <MatterDetailView id={id} />

        <DeleteMatterButton id={id} />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminMattersDetail;
