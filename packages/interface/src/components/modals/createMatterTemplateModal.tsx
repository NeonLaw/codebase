import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import { matterTemplateFields } from '../fields/matterTemplateFields';

export const CreateMatterTemplateModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="matterTemplate"
      onClose={onClose}
      onOpen={onOpen}
      isOpen={isOpen}
      fields={matterTemplateFields}
    />
  );
};
