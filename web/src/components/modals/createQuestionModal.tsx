import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import { questionFields } from '../fields/questionFields';

export const CreateQuestionModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="question"
      isOpen={isOpen}
      onClose={onClose}
      fields={questionFields}
    />
  );
};
