import { Field } from '../forms/inputTypes';

export const documentTemplateFields: Field[] = [
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
  }
];
