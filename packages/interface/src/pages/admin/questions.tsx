import { Box, Heading, Kbd, useDisclosure } from '@chakra-ui/core';
import React, { useState } from 'react';

import {
  CreateQuestionModal
} from '@neonlaw/shared-ui/src/components/modals/createQuestionModal';
import { FlashButton } from '@neonlaw/shared-ui/src/components/button';
import {
  QuestionTable
} from '@neonlaw/shared-ui/src/components/tables/questionTable';
import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import {
  UpdateQuestionModal
} from '@neonlaw/shared-ui/src/components/modals/updateQuestionModal';
import { gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';

const AdminQuestions = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCreateQuestionModal, changeShowFlashCardModal] = useState(true);
  const [currentRow, setCurrentRow] = useState(undefined);

  return (
    <PortalLayout>
      <Box textAlign="left">
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          Questions
        </Heading>

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

export default AdminQuestions;
