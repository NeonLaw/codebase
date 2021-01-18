import { Field } from '../forms/inputTypes';

export const matterTemplateFields: Field[] = [
  {
    name: 'name',
    type: 'string',
  },
  {
    name: 'javascriptModule',
    type: 'codeEditor',
  },
  {
    name: 'category',
    options: [
      { label: 'Data Deletion', value: 'data-deletion' },
      { label: 'Inmate Letter', value: 'inmate-letter' },
      { label: 'Litigation', value: 'litigation' },
      { label: 'Estate', value: 'estate' },
      { label: 'Business', value: 'business' },
      { label: 'Bar Prep', value: 'bar-prep' },
    ],
    type: 'select',
  }
];
