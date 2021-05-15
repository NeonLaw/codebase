import { Box, Kbd, useDisclosure } from '@chakra-ui/react';

import { Button } from '../../../components/button';
import {
  CreateDocumentTemplateModal
} from '../../../components/modals/createDocumentTemplateModal';
import {
  DocumentTemplateTable
} from '../../../components/tables/documentTemplateTable';
import { PortalLayout } from '../../../components/layouts/portalLayout';
import {
  UpdateDocumentTemplateModal
} from '../../../components/modals/updateDocumentTemplateModal';
import { gutters } from '../../../styles/neonLaw';
import { useAllDocumentTemplatesQuery } from '../../../utils/api';
import { useState } from 'react';

const AdminMatterDocumentTemplates = () => {
  const { loading, data, error } = useAllDocumentTemplatesQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCreateModal, changeShowCreateModal] = useState(true);
  const [currentRow, setCurrentRow] = useState(undefined);

  return (
    <PortalLayout>
      <Box textAlign="left">
        <Button
          flash={true}
          buttonScheme="cyan"
          marginBottom={gutters.xSmall}
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
        </Button>

        <CreateDocumentTemplateModal
          isOpen={isOpen && showCreateModal}
          onClose={() => {
            changeShowCreateModal(true);
            onClose();
          }}
        />

        <UpdateDocumentTemplateModal
          isOpen={isOpen && !showCreateModal}
          currentValues={(currentRow as any)?.values}
          onClose={() => {
            changeShowCreateModal(true);
            onClose();
          }}
        />

        <DocumentTemplateTable
          onRowClick={(row) => {
            changeShowCreateModal(false);
            setCurrentRow(row);
            onOpen();
          }}
          loading={loading}
          data={data}
          error={error}
        />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminMatterDocumentTemplates;
