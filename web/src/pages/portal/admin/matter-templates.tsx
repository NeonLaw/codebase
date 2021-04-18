import { Box, Kbd, useDisclosure } from '@chakra-ui/react';
import { Button } from '../../../components/button';
import {
  CreateMatterTemplateModal
} from '../../../components/modals/createMatterTemplateModal';
import {
  MatterTemplateTable
} from '../../../components/tables/matterTemplateTable';
import { PortalLayout } from '../../../components/layouts/portalLayout';
import {
  UpdateMatterTemplateModal
} from '../../../components/modals/updateMatterTemplateModal';
import { gutters } from '../../../styles/neonLaw';
import { useState } from 'react';

const AdminMatterTemplates = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCreateModal, changeShowCreateModal] = useState(
    true,
  );
  const [currentRow, setCurrentRow] = useState();

  return (
    <PortalLayout>
      <Box textAlign="left">
        <Button
          flash={false}
          buttonScheme="cyan"
          marginBottom={gutters.xSmall}
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
        </Button>

        <CreateMatterTemplateModal
          isOpen={isOpen && showCreateModal}
          onClose={() => {
            changeShowCreateModal(true);
            onClose();
          }}
        />

        <UpdateMatterTemplateModal
          isOpen={isOpen && !showCreateModal}
          currentValues={(currentRow as any)?.values}
          onClose={() => {
            changeShowCreateModal(true);
            onClose();
          }}
        />

        <MatterTemplateTable
          onRowClick={(row) => {
            changeShowCreateModal(false);
            setCurrentRow(row);
            onOpen();
          }}
        />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminMatterTemplates;
