import { Box, Kbd, useDisclosure } from '@chakra-ui/core';
import React, { useState } from 'react';

import { Breadcrumbs } from '../../../components/breadcrumbs';
import { Button } from '../../../components/button';
import {
  CreateQuestionnaireModal
} from '../../../components/modals/createQuestionnaireModal';
import { PortalLayout } from '../../../layouts/portalLayout';
import {
  QuestionnaireTable
} from '../../../components/tables/questionnaireTable';
import {
  SyncQuestionnaireButton
} from '../../../components/syncQuestionnaireButton';
import {
  UpdateQuestionnaireModal
} from '../../../components/modals/updateQuestionnaireModal';
import { gutters } from '../../../themes/neonLaw';

const AdminQuestionnaires = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCreateModal, changeShowCreateModal] = useState(true);
  const [currentRow, setCurrentRow] = useState(undefined);

  return (
    <PortalLayout>
      <Box textAlign="left">
        <Breadcrumbs />

        <Button
          flash={false}
          buttonScheme="teal"
          marginBottom={gutters.xSmall}
          marginRight={gutters.xSmall}
          onClick={onOpen}
        >
          Create Questionnaire &nbsp;<Kbd
            background="inherit"
            border="1px solid #bbb"
            transition="all .2s"
          >
            C
          </Kbd>
        </Button>

        <SyncQuestionnaireButton id={(currentRow as any)?.values.id} />

        <CreateQuestionnaireModal
          isOpen={isOpen && showCreateModal}
          onClose={() => {
            changeShowCreateModal(true);
            onClose();
          }}
        />

        <UpdateQuestionnaireModal
          isOpen={isOpen && !showCreateModal}
          currentValues={(currentRow as any)?.values}
          onClose={() => {
            changeShowCreateModal(true);
            onClose();
          }}
        />

        <QuestionnaireTable
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
export default AdminQuestionnaires;
