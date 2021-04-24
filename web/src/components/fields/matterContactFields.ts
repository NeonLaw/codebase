import { Field } from '../forms/inputTypes';

export const matterContactFields: Field[] = [
  {
    name: 'role',
    required: true,
    type: 'string',
  },
  {
    collection: 'matters',
    labelColumn: 'name',
    name: 'matterId',
    type: 'selectWithQuery'
  },
  {
    collection: 'people',
    labelColumn: 'name',
    name: 'contactId',
    type: 'selectWithQuery'
  },
];
