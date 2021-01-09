import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { flashcardFields } from '../fields/flashcardFields';

export const UpdateFlashcardModal = ({ isOpen, onClose, currentValues }) => {
  return (
    <UpdateModalFormBuilder
      resourceName="flashcard"
      currentValues={currentValues}
      isOpen={isOpen}
      onClose={onClose}
      fields={flashcardFields.concat({ name: 'id', type: 'id' })}
    />
  );
};
