import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { documentTemplateFields } from '../fields/documentTemplateFields';

export const UpdateDocumentTemplateModal = ({
  isOpen,
  onClose,
  currentValues,
}) => {
  return (
    <UpdateModalFormBuilder
      resourceName="documentTemplate"
      currentValues={currentValues}
      isOpen={isOpen}
      onClose={onClose}
      fields={documentTemplateFields.concat({ name: 'id', type: 'id' })}
    />
  );
};
