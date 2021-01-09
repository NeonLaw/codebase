import { Modal, ModalContent, ModalOverlay} from '@chakra-ui/core';
import React from 'react';

export const CreateMatterDocumentModal = ({ isOpen, onClose}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay>
        <ModalContent
          data-testid={'create-matter-document-form'}
          margin="8em 2em 0 2em"
        >
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
