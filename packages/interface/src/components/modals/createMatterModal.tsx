import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';

export const CreateMatterModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="matter"
      isOpen={isOpen}
      onClose={onClose}
      fields={[
        {
          name: 'name',
          required: true,
          type: 'string',
        },
        {
          labelColumn: 'name',
          name: 'matterTemplateId',
          queryName: 'allMatterTemplates',
          type: 'selectWithQuery'
        },
        {
          labelColumn: 'email',
          name: 'primaryContactId',
          queryName: 'allPeople',
          type: 'selectWithQuery'
        }
      ]}
    />
  );
};
