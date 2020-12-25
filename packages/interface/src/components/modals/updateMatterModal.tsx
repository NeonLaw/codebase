import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { matterFields } from '../fields/matterFields';

export const UpdateMatterModal = ({ isOpen, onClose, matter }) => {
  const { id } = matter;

  return (
    <UpdateModalFormBuilder
      isOpen={isOpen}
      resourceName="matter"
      onClose={onClose}
      currentValues={{ id }}
      fields={matterFields}
    />
  );
};
