import { Box, useDisclosure } from '@chakra-ui/react';
import { Breadcrumbs } from '../../../../components/breadcrumbs';
import { Button } from '../../../../components/button';
import {
  CreateMatterDocumentModal
} from '../../../../components/modals/createMatterDocumentModal';
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
import { gutters } from '../../../../themes/neonLaw';

const AdminMattersDetail = ({ params: { id }}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <PortalLayout>
      <Box>
        <Breadcrumbs showHome={false} />

        <Button
          flash={false}
          buttonScheme="teal"
          containerStyles={{margin: `0 0 ${gutters.xSmallOne}`}}
          onClick={onOpen}
        >
          Create Matter Document
        </Button>

        <DeleteMatterButton id={id} />

        <CreateMatterDocumentModal
          isOpen={isOpen}
          matterId={id}
          onClose={() => {
            onClose();
          }}
        />

        <MatterDetailView id={id} />
        <MatterDocumentsList matterId={id} />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminMattersDetail;
