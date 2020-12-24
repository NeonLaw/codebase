import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';

export const CreateMatterTemplateModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="matterTemplate"
      onClose={onClose}
      isOpen={isOpen}
      fields={[
        {
          name: 'name',
          type: 'string',
        },
        {
          name: 'javascriptModule',
          type: 'codeEditor',
        },
        {
          name: 'category',
          options: [
            { label: 'Data Deletion', value: 'data-deletion' },
            { label: 'Inmate Letter', value: 'inmate-letter' },
            { label: 'Litigation', value: 'litigation' },
            { label: 'Estate', value: 'estate' },
            { label: 'Business', value: 'business' },
          ],
          type: 'select',
        },
      ]}
    />
  );
};
