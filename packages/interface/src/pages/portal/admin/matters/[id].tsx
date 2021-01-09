import { Box } from '@chakra-ui/core';
import { Breadcrumbs } from '../../../../components/breadcrumbs';
// import {
//   CreateMatterDocumentModal
// } from '../../../../components/modals/createMatterDocumentModal';
import {
  DeleteMatterButton
} from '../../../../components/deleteButtons/deleteMatterButton';
import {
  MatterDetailView
} from '../../../../components/detailViews/matterDetailView';
import {
  MatterDocumentsList
} from '../../../../components/lists/matterDocumentsList';
import { PortalLayout } from '../../../../layouts/portalLayout';
import React from 'react';

const AdminMattersDetail = ({ params: { id }}) => {
  return (
    <PortalLayout>
      <Box>
        <Breadcrumbs showHome={false} />

        <MatterDetailView id={id} />


        {/* <CreateMatterDocumentModal
          isOpen={isOpen}
          onClose={() => {
            onClose();
          }}
        /> */}

        <MatterDocumentsList matterId={id} />

        <DeleteMatterButton id={id} />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminMattersDetail;
