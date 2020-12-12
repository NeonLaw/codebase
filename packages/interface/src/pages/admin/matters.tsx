import { Box, Kbd, useDisclosure } from '@chakra-ui/core';
import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/breadcrumbs';
import {
  CreateMatterModal
} from '../../components/modals/createMatterModal';
import { FlashButton } from '../../components/button';
import {
  MatterTable
} from '../../components/tables/matterTable';
import { PortalLayout } from '../../layouts/portalLayout';
import {
  UpdateMatterModal
} from '../../components/modals/updateMatterModal';
import { gutters } from '../../themes/neonLaw';

const AdminMatters = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [
    showCreateMatterModal,
    changeShowCreateMatterModal
  ] = useState(true);
  const [currentRow, setCurrentRow] = useState(undefined);

  return (
    <PortalLayout>
      <Box textAlign="left">
        <Breadcrumbs />

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
          onOpen={onOpen}
        />

        <UpdateMatterModal
          isOpen={isOpen && !showCreateMatterModal}
          onOpen={onOpen}
          matter={currentRow}
          onClose={() => {
            changeShowCreateMatterModal(true);
            onClose();
          }}
        />

        <MatterTable
          onRowClick={(row) => {
            changeShowCreateMatterModal(false);
            setCurrentRow(row);
            onOpen();
          }}
        />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminMatters;
