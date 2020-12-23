import { Box, Kbd, useDisclosure } from '@chakra-ui/core';
import React, { useState } from 'react';
import { Breadcrumbs } from '../../../../components/breadcrumbs';
import {
  CreateMatterModal
} from '../../../../components/modals/createMatterModal';
import { FlashButton } from '../../../../components/button';
import {
  MatterTable
} from '../../../../components/tables/matterTable';
import { PortalLayout } from '../../../../layouts/portalLayout';
import { gutters } from '../../../../themes/neonLaw';
import { navigate } from 'gatsby';

const AdminMatters = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [
    showCreateMatterModal,
    changeShowCreateMatterModal
  ] = useState(true);

  return (
    <PortalLayout>
      <Box textAlign="left">
        <Breadcrumbs showHome={false} />

        <FlashButton
          buttonScheme="teal"
          containerStyles={{margin: `0 0 ${gutters.xSmallOne}`}}
          onClick={onOpen}
        >
          Create Matter &nbsp;
          <Kbd
            background="inherit"
            border="1px solid #bbb"
            transition="all .2s"
          >
            C
          </Kbd>
        </FlashButton>

        <CreateMatterModal
          isOpen={isOpen && showCreateMatterModal}
          onClose={() => {
            changeShowCreateMatterModal(true);
            onClose();
          }}
        />

        <MatterTable
          onRowClick={(row) => {
            navigate(`/portal/admin/matters/${row.values.id}`);
          }}
        />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminMatters;
