import { Box, Kbd, useDisclosure } from '@chakra-ui/react';
import { Button } from '../../../../components/button';
import {
  CreateMatterModal
} from '../../../../components/modals/createMatterModal';
import {
  MatterTable
} from '../../../../components/tables/matterTable';
import { PortalLayout } from '../../../../components/layouts/portalLayout';
import {
  UpdateMatterModal
} from '../../../../components/modals/updateMatterModal';
import { gutters } from '../../../../styles/neonLaw';
import { useState } from 'react';

const AdminMatters = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [
    showCreateMatterModal,
    changeShowCreateMatterModal
  ] = useState(true);
  const [currentRow, setCurrentRow] = useState({ values: [] });

  return (
    <PortalLayout>
      <Box textAlign="left">
        <Button
          flash={false}
          buttonScheme="cyan"
          marginBottom={gutters.xSmall}
          onClick={() => {
            changeShowCreateMatterModal(true);
            onOpen();
          }}
        >
          Create Matter &nbsp;
          <Kbd
            background="inherit"
            border="1px solid #bbb"
            transition="all .2s"
          >
            C
          </Kbd>
        </Button>

        <CreateMatterModal
          isOpen={isOpen && showCreateMatterModal}
          onClose={onClose}
        />

        <UpdateMatterModal
          isOpen={isOpen && !showCreateMatterModal}
          matter={currentRow.values}
          onClose={onClose}
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
