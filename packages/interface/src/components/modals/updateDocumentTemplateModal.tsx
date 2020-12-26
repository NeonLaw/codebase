import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { documentTemplateFields } from '../fields/documentTemplateFields';

export const UpdateDocumentTemplateModal = ({
  isOpen,
  onClose,
  documentTemplate,
}) => {
  return (
    <UpdateModalFormBuilder
      resourceName="documentTemplate"
      currentValues={documentTemplate}
      isOpen={isOpen}
      onClose={onClose}
      fields={documentTemplateFields}
    />
  );
};
