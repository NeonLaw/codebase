import { Field } from '../forms/inputTypes';

export const letterFields: Field[] = [
  {
    name: 'body',
    required: true,
    type: 'textarea',
  },
  {
    collection: 'addresses',
    labelColumn: 'name',
    name: 'addresseeId',
    type: 'selectWithQuery'
  },
  {
    collection: 'addresses',
    labelColumn: 'name',
    name: 'addressorId',
    type: 'selectWithQuery'
  }
];
