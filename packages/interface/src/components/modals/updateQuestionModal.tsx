import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { questionFields } from '../fields/questionFields';

export const UpdateQuestionModal = ({ isOpen, onClose, question }) => {
  return (
    <UpdateModalFormBuilder
      resourceName="question"
      currentValues={question}
      isOpen={isOpen}
      onClose={onClose}
      fields={questionFields}
    />
  );
};
