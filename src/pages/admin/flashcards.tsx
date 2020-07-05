import {
  Box,
  Button,
  Heading,
  useDisclosure,
} from '@chakra-ui/core';
import { CreateFlashcardModal } from '@components/modals/createFlashcardModal';
import { FlashcardTable } from '@components/tables/flashcardTable';
import { PortalLayout } from '@layouts/portalLayout';
import React from 'react';

const AdminFlashcards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PortalLayout>
      <Box>
        <Heading>
          Flashcards
        </Heading>

        <Button onClick={onOpen}>Create Flashcard</Button>

        <CreateFlashcardModal isOpen={isOpen} onClose={onClose} />

        <FlashcardTable />
      </Box>
    </PortalLayout>
  );
};

export default AdminFlashcards;
