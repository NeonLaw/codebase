import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';

export const UpdateFlashcardModal = ({ isOpen, onClose, flashcard }) => {
  return (
    <UpdateModalFormBuilder
      resourceName="flashcard"
      currentValues={flashcard}
      isOpen={isOpen}
      onClose={onClose}
      fields={[
        {
          name: 'prompt',
          required: true,
          type: 'string',
        },
        {
          name: 'answer',
          required: true,
          type: 'textarea'
        }
      ]}
    />
  );
};
