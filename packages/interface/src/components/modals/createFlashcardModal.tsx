import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import { flashcardFields } from '../fields/flashcardFields';

export const CreateFlashcardModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="flashcard"
      isOpen={isOpen}
      onClose={onClose}
      fields={flashcardFields}
    />
  );
};
