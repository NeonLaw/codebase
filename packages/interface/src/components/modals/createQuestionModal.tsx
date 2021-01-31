import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import { questionFields } from '../fields/questionFields';

export const CreateQuestionModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="question"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      fields={questionFields}
    />
  );
};
