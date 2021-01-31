import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import {
  matterDocumentTemplateFields
} from '../fields/matterDocumentTemplateFields';

export const CreateMatterDocumentTemplateModal = ({
  isOpen, onClose, onOpen 
}) => {
  return (
    <CreateModalFormBuilder
      resourceName="matterDocumentTemplate"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      fields={matterDocumentTemplateFields}
    />
  );
};
