import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { questionnaireFields } from '../fields/questionnaireFields';

export const UpdateQuestionnaireModal = ({
  isOpen, onClose, currentValues
}) => {
  return (
    <UpdateModalFormBuilder
      resourceName="questionnaire"
      currentValues={currentValues}
      isOpen={isOpen}
      onClose={onClose}
      fields={questionnaireFields.concat({ name: 'id', type: 'id' })}
    />
  );
};
