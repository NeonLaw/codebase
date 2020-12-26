import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { flashcardFields } from '../fields/flashcardFields';

export const UpdateFlashcardModal = ({ isOpen, onClose, flashcard }) => {
  return (
    <UpdateModalFormBuilder
      resourceName="flashcard"
      currentValues={flashcard}
      isOpen={isOpen}
      onClose={onClose}
      fields={flashcardFields}
    />
  );
};
