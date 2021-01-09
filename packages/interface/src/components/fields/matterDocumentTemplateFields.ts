import { Field } from '../forms/inputTypes';

export const matterDocumentTemplateFields: Field[] = [
  {
    name: 'name',
    required: true,
    type: 'string',
  },
  {
    name: 'description',
    required: true,
    type: 'string',
  }
];
