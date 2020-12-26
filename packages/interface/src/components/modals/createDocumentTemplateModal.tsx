import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import { documentTemplateFields } from '../fields/documentTemplateFields';

export const CreateDocumentTemplateModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="documentTemplate"
      isOpen={isOpen}
      onClose={onClose}
      fields={documentTemplateFields}
    />
  );
};
