import { Box, Kbd, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

import { Breadcrumbs } from '../../../components/breadcrumbs';
import { Button } from '../../../components/button';
import {
  CreateQuestionModal
} from '../../../components/modals/createQuestionModal';
import { PortalLayout } from '../../../layouts/portalLayout';
import {
  QuestionTable
} from '../../../components/tables/questionTable';
import {
  UpdateQuestionModal
} from '../../../components/modals/updateQuestionModal';
import { gutters } from '../../../themes/neonLaw';

const AdminQuestions = () => {
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
          onClick={onOpen}
        >
          Create Question &nbsp;<Kbd
            background="inherit"
            border="1px solid #bbb"
            transition="all .2s"
          >
            C
          </Kbd>
        </Button>

        <CreateQuestionModal
          isOpen={isOpen && showCreateModal}
          onClose={() => {
            changeShowCreateModal(true);
            onClose();
          }}
        />

        <UpdateQuestionModal
          isOpen={isOpen && !showCreateModal}
          questionId={(currentRow as any)?.values.id}
          onClose={() => {
            changeShowCreateModal(true);
            onClose();
          }}
        />

        <QuestionTable
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
export default AdminQuestions;
