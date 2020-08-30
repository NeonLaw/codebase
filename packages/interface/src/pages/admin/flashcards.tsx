import {
  Box,
  Button,
  Heading,
  useDisclosure,
} from '@chakra-ui/core';

import {
  CreateFlashcardModal
} from '@neonlaw/shared-ui/src/components/modals/createFlashcardModal';
import {
  FlashcardTable
} from '@neonlaw/shared-ui/src/components/tables/flashcardTable';
import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import React from 'react';
import {
  gutters
} from '@neonlaw/shared-ui/src/themes/neonLaw';

const AdminFlashcards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PortalLayout>
      <Box>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          Flashcards
        </Heading>

        <Button
          onClick={onOpen}
          marginBottom={gutters.xSmallOne}
        >
          Create Flashcard
        </Button>

        <CreateFlashcardModal isOpen={isOpen} onClose={onClose} />

        <FlashcardTable />
      </Box>
    </PortalLayout>
  );
};

export default AdminFlashcards;
