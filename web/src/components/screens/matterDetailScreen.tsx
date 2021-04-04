import { Box, useDisclosure } from '@chakra-ui/react';
import { Breadcrumbs } from '../breadcrumbs';
import { Button } from '../button';
import {
  CreateUnprocessedMatterDocumentModal
} from '../modals/createUnprocessedMatterDocumentModal';
import {
  DeleteMatterButton
} from '../deleteButtons/deleteMatterButton';
import {
  MatterDetailView
} from '../detailViews/matterDetailView';
import { PortalLayout } from '../layouts/portalLayout';
import React from 'react';
import { gutters } from '../../styles/neonLaw';
import { useRouter } from 'next/router';

export const MatterDetailScreen = () => {
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
