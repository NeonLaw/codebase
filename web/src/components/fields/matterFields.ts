import { Field } from '../forms/inputTypes';

export const matterFields: Field[] = [
  {
    name: 'name',
    required: true,
    type: 'string',
  },
  {
    collection: 'matterTemplates',
    labelColumn: 'name',
    name: 'matterTemplateId',
    type: 'selectWithQuery'
  },
  {
    collection: 'people',
    labelColumn: 'email',
    name: 'primaryContactId',
    type: 'selectWithQuery'
  },
  {
    name: 'description',
    required: true,
    type: 'textarea',
  },
];
