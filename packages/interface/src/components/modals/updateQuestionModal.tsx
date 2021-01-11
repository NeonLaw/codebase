import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { questionFields } from '../fields/questionFields';

export const UpdateQuestionModal = ({ isOpen, onClose, currentValues }) => {
  return (
    <UpdateModalFormBuilder
      resourceName="question"
      currentValues={currentValues}
      isOpen={isOpen}
      onClose={onClose}
      fields={questionFields}
    />
  );
};
