import { Box, Kbd, useDisclosure } from '@chakra-ui/core';
import React, { useState } from 'react';

import { Breadcrumbs } from '../../../components/breadcrumbs';
import { Button } from '../../../components/button';
import {
  CreateMatterTemplateModal
} from '../../../components/modals/createMatterTemplateModal';
import {
  MatterTemplateTable
} from '../../../components/tables/matterTemplateTable';
import { PortalLayout } from '../../../layouts/portalLayout';
import {
  UpdateMatterTemplateModal
} from '../../../components/modals/updateMatterTemplateModal';
import { gutters } from '../../../themes/neonLaw';

const AdminMatterTemplates = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCreateMatterTemplateModal, changeShowFlashCardModal] = useState(
    true,
  );
  const [currentRow, setCurrentRow] = useState();

  return (
    <PortalLayout>
      <Box textAlign="left">
        <Breadcrumbs />

        <Button
          flash={true}
          buttonScheme="teal"
          containerStyles={{ margin: `0 0 ${gutters.xSmallOne}` }}
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
          isOpen={isOpen && showCreateMatterTemplateModal}
          onClose={() => {
            changeShowFlashCardModal(true);
            onClose();
          }}
        />

        <UpdateMatterTemplateModal
          isOpen={isOpen && !showCreateMatterTemplateModal}
          currentValues={(currentRow as any)?.values}
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

/* eslint-disable-next-line import/no-default-export */
export default AdminMatterTemplates;
