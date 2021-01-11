import { Field } from '../forms/inputTypes';

export const questionnaireFields: Field[] = [
  {
    name: 'name',
    required: true,
    type: 'string',
  },
  {
    name: 'questionTree',
    type: 'codeEditor',
  },
  {
    labelColumn: 'name',
    name: 'matterTemplateId',
    queryName: 'allMatterTemplates',
    type: 'selectWithQuery'
  },
];
