import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import {
  matterDocumentTemplateFields
} from '../fields/matterDocumentTemplateFields';

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
      fields={matterDocumentTemplateFields.concat({ name: 'id', type: 'id' })}
    />
  );
};
