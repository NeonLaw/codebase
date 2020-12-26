import { Field } from '../forms/inputTypes';

const options = [
  { label: 'Public', value: 'anonymous' },
  { label: 'Clients', value: 'portal' },
  { label: 'Lawyers', value: 'lawyer' },
  { label: 'Admin', value: 'admin' },
];

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
    options,
    type: 'select',
  },
  {
    name: 'createAuthorization',
    options,
    type: 'select',
  },
  {
    name: 'updateAuthorization',
    options,
    type: 'select',
  },
  {
    name: 'deleteAuthorization',
    options,
    type: 'select',
  }
];
