import { Box, useDisclosure } from '@chakra-ui/react';
import { Breadcrumbs } from '../../../../../components/breadcrumbs';
import { Button } from '../../../../../components/button';
import {
  CreateUnprocessedMatterDocumentModal
} from '../../../../../components/modals/createUnprocessedMatterDocumentModal';
import {
  DeleteMatterButton
} from '../../../../../components/deleteButtons/deleteMatterButton';
import {
  MatterDetailView
} from '../../../../../components/detailViews/matterDetailView';
import { PortalLayout } from '../../../../../components/layouts/portalLayout';
import React from 'react';
import { gutters } from '../../../../../styles/neonLaw';
import { useRouter } from 'next/router';

const AdminMattersDetail = () => {
  const router = useRouter();
  const { id } = router.query;
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

        <CreateUnprocessedMatterDocumentModal
          isOpen={isOpen}
          matterId={id}
          onClose={() => {
            onClose();
          }}
        />

        <MatterDetailView id={id} />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminMattersDetail;
