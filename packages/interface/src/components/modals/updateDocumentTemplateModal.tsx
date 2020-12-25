import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';

export const UpdateDocumentTemplateModal = ({
  isOpen,
  onClose,
  documentTemplate,
}) => {
  return (
    <UpdateModalFormBuilder
      resourceName="documentTemplate"
      currentValues={documentTemplate}
      isOpen={isOpen}
      onClose={onClose}
      fields={[
        {
          name: 'name',
          required: true,
          type: 'string',
        },
        {
          name: 'description',
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
