import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import { matterContactFields } from '../fields/matterContactFields';

export const CreateMatterContactModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="matterContact"
      isOpen={isOpen}
      onClose={onClose}
      fields={matterContactFields}
    />
  );
};
