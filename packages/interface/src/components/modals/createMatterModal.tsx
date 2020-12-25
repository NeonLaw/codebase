import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import { matterFields } from '../fields/matterFields';

export const CreateMatterModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="matter"
      isOpen={isOpen}
      onClose={onClose}
      fields={matterFields}
    />
  );
};
