import { Box, Kbd, useDisclosure } from '@chakra-ui/core';
import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/breadcrumbs';
import {
  CreateDocumentTemplateModal
} from '../../components/modals/createDocumentTemplateModal';
import {
  DocumentTemplateTable
} from '../../components/tables/documentTemplateTable';
import { FlashButton } from '../../components/button';
import { PortalLayout } from '../../layouts/portalLayout';
import {
  UpdateDocumentTemplateModal
} from '../../components/modals/updateDocumentTemplateModal';
import { gutters } from '../../themes/neonLaw';

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

/* eslint-disable-next-line import/no-default-export */
export default AdminDocumentTemplates;
