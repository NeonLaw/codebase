import React from 'react';
import {
  UpdateModalFormBuilder
} from '../forms/updateModalFormBuilder';

export const UpdatePersonModal = ({ isOpen, onClose, person }) => {
  const { id } = person;

  return (
    <UpdateModalFormBuilder
      isOpen={isOpen}
      resourceName="person"
      onClose={onClose}
      currentValues={{ id }}
      fields={[
        {
          name: 'name',
          required: true,
          type: 'string',
        },
        {
          flagName: 'accessibleButtons',
          name: 'flags',
          type: 'flagSwitch',
        }
      ]}
    />
  );
};
