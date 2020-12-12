import { Box, Kbd, useDisclosure } from '@chakra-ui/core';
import React, { useState } from 'react';
import { Breadcrumbs } from '../../components/breadcrumbs';
import {
  CreateFlashcardModal
} from '../../components/modals/createFlashcardModal';
import { FlashButton } from '../../components/button';
import {
  FlashcardTable
} from '../../components/tables/flashcardTable';
import {
  PortalLayout
} from '../../layouts/portalLayout';
import {
  UpdateFlashcardModal
} from '../../components/modals/updateFlashcardModal';
import { gutters } from '../../themes/neonLaw';

const AdminFlashcards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCreateFlashcardModal, changeShowFlashCardModal] = useState(true);
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
          Create Flashcard &nbsp;<Kbd
            background="inherit"
            border="1px solid #bbb"
            transition="all .2s"
          >
            C
          </Kbd>
        </FlashButton>

        <CreateFlashcardModal
          isOpen={isOpen && showCreateFlashcardModal}
          onClose={() => {
            changeShowFlashCardModal(true);
            onClose();
          }}
          onOpen={onOpen}
        />

        <UpdateFlashcardModal
          isOpen={isOpen && !showCreateFlashcardModal}
          currentRow={currentRow}
          onClose={() => {
            changeShowFlashCardModal(true);
            onClose();
          }}
        />

        <FlashcardTable
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
export default AdminFlashcards;
