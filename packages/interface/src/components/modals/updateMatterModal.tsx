import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';

export const UpdateMatterModal = ({ isOpen, onClose, matter }) => {
  const { id } = matter;

  return (
    <UpdateModalFormBuilder
      isOpen={isOpen}
      resourceName="matter"
      onClose={onClose}
      currentValues={{ id }}
      fields={[
        {
          name: 'name',
          required: true,
          type: 'string',
        },
        {
          name: 'matterTemplate',
          type: 'selectWithQuery'
        }
      ]}
    />
  );
};
