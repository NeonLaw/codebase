import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import { matterFields } from '../fields/matterFields';

export const CreateMatterModal = ({ isOpen, onOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="matter"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      fields={matterFields}
    />
  );
};
