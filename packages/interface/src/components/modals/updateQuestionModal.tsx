import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';

export const UpdateQuestionModal = ({ isOpen, onClose, question }) => {
  return (
    <UpdateModalFormBuilder
      resourceName="question"
      currentValues={question}
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
