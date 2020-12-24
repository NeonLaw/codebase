import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';

export const CreateDocumentTemplateModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="documentTemplate"
      isOpen={isOpen}
      onClose={onClose}
      fields={[
        {
          name: 'name',
          required: true,
          type: 'string',
        },
        {
          name: 'readAuthorization',
          options: [
            { label: 'Public', value: 'anonymous' },
            { label: 'Clients', value: 'portal' },
            { label: 'Lawyers', value: 'lawyer' },
            { label: 'Admin', value: 'admin' },
          ],
          type: 'select',
        },
        {
          name: 'createAuthorization',
          options: [
            { label: 'Public', value: 'anonymous' },
            { label: 'Clients', value: 'portal' },
            { label: 'Lawyers', value: 'lawyer' },
            { label: 'Admin', value: 'admin' },
          ],
          type: 'select',
        },
        {
          name: 'updateAuthorization',
          options: [
            { label: 'Public', value: 'anonymous' },
            { label: 'Clients', value: 'portal' },
            { label: 'Lawyers', value: 'lawyer' },
            { label: 'Admin', value: 'admin' },
          ],
          type: 'select',
        },
        {
          name: 'deleteAuthorization',
          options: [
            { label: 'Public', value: 'anonymous' },
            { label: 'Clients', value: 'portal' },
            { label: 'Lawyers', value: 'lawyer' },
            { label: 'Admin', value: 'admin' },
          ],
          type: 'select',
        },
      ]}
    />
  );
};
