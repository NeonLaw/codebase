import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import { matterDocumentFields } from '../fields/matterDocumentFields';

export const CreateMatterDocumentModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="matterDocument"
      isOpen={isOpen}
      onClose={onClose}
      fields={matterDocumentFields}
    />
  );
};
