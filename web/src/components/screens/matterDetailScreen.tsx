import { Box } from '@chakra-ui/react';
import { Breadcrumbs } from '../breadcrumbs';
import {
  MatterDetailView
} from '../detailViews/matterDetailView';
import { PortalLayout } from '../layouts/portalLayout';
import React from 'react';
import { useRouter } from 'next/router';

export const MatterDetailScreen = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PortalLayout>
      <Box>
        <Breadcrumbs showHome={false} />

        <MatterDetailView id={id} />
      </Box>
    </PortalLayout>
  );
};
