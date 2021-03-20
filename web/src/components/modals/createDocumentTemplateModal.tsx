import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import {
  matterDocumentTemplateFields
} from '../fields/matterDocumentTemplateFields';

export const CreateDocumentTemplateModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="documentTemplate"
      isOpen={isOpen}
      onClose={onClose}
      fields={matterDocumentTemplateFields}
    />
  );
};
