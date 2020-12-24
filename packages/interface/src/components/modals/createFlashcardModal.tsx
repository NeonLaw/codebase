import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';

export const CreateFlashcardModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="flashcard"
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
