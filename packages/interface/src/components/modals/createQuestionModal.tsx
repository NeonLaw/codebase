import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';

export const CreateQuestionModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="question"
      isOpen={isOpen}
      onClose={onClose}
      fields={[
        {
          name: 'prompt',
          required: true,
          type: 'string',
        },
        {
          name: 'questionType',
          options: [
            { label: 'Single Choice', value: 'single-choice' },
            { label: 'Single Date', value: 'single-date' },
            {
              label: 'Single File Upload',
              value: 'single-file-upload'
            },
          ],
          type: 'select',
        }
      ]}
    />
  );
};
