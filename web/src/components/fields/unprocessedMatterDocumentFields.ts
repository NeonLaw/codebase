import { Field } from '../forms/inputTypes';

export const unprocessedMatterDocumentFields: Field[] = [
  {
    name: 'matterId',
    required: true,
    type: 'id',
  },
  {
    collection: 'documentTemplates',
    labelColumn: 'name',
    name: 'documentTemplateId',
    type: 'selectWithQuery'
  }
];
