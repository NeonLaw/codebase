import { Box, Kbd, useDisclosure } from '@chakra-ui/core';
import React, { useState } from 'react';
import { Breadcrumbs } from '@neonlaw/shared-ui/src/components/breadcrumbs';
import {
  CreateDocumentTemplateModal
} from '@neonlaw/shared-ui/src/components/modals/createDocumentTemplateModal';
import {
  DocumentTemplateTable
} from '@neonlaw/shared-ui/src/components/tables/documentTemplateTable';
import { FlashButton } from '@neonlaw/shared-ui/src/components/button';
import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import {
  UpdateDocumentTemplateModal
} from '@neonlaw/shared-ui/src/components/modals/updateDocumentTemplateModal';
import { gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';

const AdminDocumentTemplates = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [
    showCreateDocumentTemplateModal,
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
          Create Document Template&nbsp;
          <Kbd
            background="inherit"
            border="1px solid #bbb"
            transition="all .2s"
          >
            C
          </Kbd>
        </FlashButton>

        <CreateDocumentTemplateModal
          isOpen={isOpen && showCreateDocumentTemplateModal}
          onClose={() => {
            changeShowFlashCardModal(true);
            onClose();
          }}
          onOpen={onOpen}
        />

        <UpdateDocumentTemplateModal
          isOpen={isOpen && !showCreateDocumentTemplateModal}
          currentRow={currentRow}
          onClose={() => {
            changeShowFlashCardModal(true);
            onClose();
          }}
        />

        <DocumentTemplateTable
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

export default AdminDocumentTemplates;
