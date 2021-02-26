import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import {
  matterDocumentTemplateFields
} from '../fields/matterDocumentTemplateFields';

export const CreateMatterDocumentTemplateModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="matterDocumentTemplate"
      isOpen={isOpen}
      onClose={onClose}
      fields={matterDocumentTemplateFields}
    />
  );
};
