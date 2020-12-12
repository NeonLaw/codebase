import { Box, Kbd, useDisclosure } from '@chakra-ui/core';
import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/breadcrumbs';
import {
  CreateQuestionModal
} from '../../components/modals/createQuestionModal';
import { FlashButton } from '../../components/button';
import { PortalLayout } from '../../layouts/portalLayout';
import {
  QuestionTable
} from '../../components/tables/questionTable';
import {
  UpdateQuestionModal
} from '../../components/modals/updateQuestionModal';
import { gutters } from '../../themes/neonLaw';

const AdminQuestions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCreateQuestionModal, changeShowFlashCardModal] = useState(true);
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
          Create Question &nbsp;<Kbd
            background="inherit"
            border="1px solid #bbb"
            transition="all .2s"
          >
            C
          </Kbd>
        </FlashButton>

        <CreateQuestionModal
          isOpen={isOpen && showCreateQuestionModal}
          onClose={() => {
            changeShowFlashCardModal(true);
            onClose();
          }}
          onOpen={onOpen}
        />

        <UpdateQuestionModal
          isOpen={isOpen && !showCreateQuestionModal}
          currentRow={currentRow}
          onClose={() => {
            changeShowFlashCardModal(true);
            onClose();
          }}
        />

        <QuestionTable
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
export default AdminQuestions;
