import { Box, Heading, Kbd, useDisclosure } from '@chakra-ui/core';
import React, { useState } from 'react';

import {
  CreateFlashcardModal
} from '@neonlaw/shared-ui/src/components/modals/createFlashcardModal';
import { FlashButton } from '@neonlaw/shared-ui/src/components/button';
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

export default AdminFlashcards;
