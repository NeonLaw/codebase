import { Field } from '../forms/inputTypes';

export const matterFields: Field[] = [
  {
    name: 'name',
    required: true,
    type: 'string',
  },
  {
    labelColumn: 'name',
    name: 'matterTemplateId',
    queryName: 'allMatterTemplates',
    type: 'selectWithQuery'
  },
  {
    labelColumn: 'email',
    name: 'primaryContactId',
    queryName: 'allPeople',
    type: 'selectWithQuery'
  }
];
