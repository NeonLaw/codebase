import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import {
  matterDocumentTemplateFields
} from '../fields/matterDocumentTemplateFields';

export const UpdateMatterDocumentTemplateModal = ({
  isOpen,
  onClose,
  currentValues,
}) => {
  return (
    <UpdateModalFormBuilder
      resourceName="matterDocumentTemplate"
      currentValues={currentValues}
      isOpen={isOpen}
      onClose={onClose}
      fields={matterDocumentTemplateFields.concat({ name: 'id', type: 'id' })}
    />
  );
};
