import { Box, Kbd, useDisclosure } from '@chakra-ui/core';
import React, { useState } from 'react';
import { Breadcrumbs } from '@neonlaw/shared-ui/src/components/breadcrumbs';
import {
  CreateMatterTemplateModal
} from '@neonlaw/shared-ui/src/components/modals/createMatterTemplateModal';
import { FlashButton } from '@neonlaw/shared-ui/src/components/button';
import {
  MatterTemplateTable
} from '@neonlaw/shared-ui/src/components/tables/matterTemplateTable';
import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import {
  UpdateMatterTemplateModal
} from '@neonlaw/shared-ui/src/components/modals/updateMatterTemplateModal';
import { gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';

const AdminMatterTemplates = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [
    showCreateMatterTemplateModal,
    changeShowFlashCardModal
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
          Create Matter Template&nbsp;
          <Kbd
            background="inherit"
            border="1px solid #bbb"
            transition="all .2s"
          >
            C
          </Kbd>
        </FlashButton>

        <CreateMatterTemplateModal
          isOpen={isOpen && showCreateMatterTemplateModal}
          onClose={() => {
            changeShowFlashCardModal(true);
            onClose();
          }}
          onOpen={onOpen}
        />

        <UpdateMatterTemplateModal
          isOpen={isOpen && !showCreateMatterTemplateModal}
          currentRow={currentRow}
          onClose={() => {
            changeShowFlashCardModal(true);
            onClose();
          }}
        />

        <MatterTemplateTable
          onRowClick={(row) => {
            changeShowFlashCardModal(false);
            setCurrentRow(row);
            onOpen();
          }}
        />
      </Box>
    </PortalLayout>
  );
};

export default AdminMatterTemplates;
