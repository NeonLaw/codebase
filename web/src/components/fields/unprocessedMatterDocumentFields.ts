import { Field } from '../forms/inputTypes';

export const unprocessedMatterDocumentFields: Field[] = [
  {
    name: 'matterId',
    required: true,
    type: 'id',
  },
  {
    labelColumn: 'name',
    name: 'documentTemplateId',
    queryName: 'allDocumentTemplates',
    type: 'selectWithQuery'
  }
];
