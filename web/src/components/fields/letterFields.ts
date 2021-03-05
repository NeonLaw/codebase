import { Field } from '../forms/inputTypes';

export const letterFields: Field[] = [
  {
    name: 'body',
    required: true,
    type: 'textarea',
  },
  {
    labelColumn: 'name',
    name: 'addresseeId',
    queryName: 'allPeople',
    type: 'selectWithQuery'
  },
  {
    labelColumn: 'name',
    name: 'addressorId',
    queryName: 'allPeople',
    type: 'selectWithQuery'
  }
];
