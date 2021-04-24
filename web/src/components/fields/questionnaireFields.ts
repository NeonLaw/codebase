import { Field } from '../forms/inputTypes';

export const questionnaireFields: Field[] = [
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
];
