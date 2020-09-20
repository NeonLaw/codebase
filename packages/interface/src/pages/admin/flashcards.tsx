import { Box, Button, Heading, Kbd, useDisclosure } from '@chakra-ui/core';
import React, { useState } from 'react';

import {
  CreateFlashcardModal
} from '@neonlaw/shared-ui/src/components/modals/createFlashcardModal';
import {
  FlashcardTable
} from '@neonlaw/shared-ui/src/components/tables/flashcardTable';
import {
  PortalLayout
} from '@neonlaw/shared-ui/src/layouts/portalLayout';
import {
  UpdateFlashcardModal
} from '@neonlaw/shared-ui/src/components/modals/updateFlashcardModal';
import { gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';

const AdminFlashcards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showCreateFlashcardModal, changeShowFlashCardModal] = useState(true);
  const [currentRow, setCurrentRow] = useState(undefined);

  return (
    <PortalLayout>
      <Box>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          Flashcards
        </Heading>

        <Button onClick={onOpen} marginBottom={gutters.xSmallOne}>
          Create Flashcard &nbsp;<Kbd border="1px solid #bbb">C</Kbd>
        </Button>

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

export default AdminFlashcards;
