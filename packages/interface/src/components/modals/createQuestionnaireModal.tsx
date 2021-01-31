import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import { questionnaireFields } from '../fields/questionnaireFields';

export const CreateQuestionnaireModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="questionnaire"
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      fields={questionnaireFields}
    />
  );
};
