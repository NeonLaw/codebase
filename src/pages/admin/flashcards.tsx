import {
  Box,
  Button,
  Heading,
  useDisclosure,
} from '@chakra-ui/core';
import { AdminLayout } from '@layouts/admin';
import { CreateFlashcardModal } from '@components/modals/createFlashcardModal';
import { FlashcardTable } from '@components/tables/flashcardTable';
import React from 'react';

const AdminFlashcards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <AdminLayout>
      <Box>
        <Heading>
          Flashcards
        </Heading>

        <Button onClick={onOpen}>Create Flashcard</Button>

        <CreateFlashcardModal isOpen={isOpen} onClose={onClose} />

        <FlashcardTable />
      </Box>
    </AdminLayout>
  );
};

export default AdminFlashcards;
