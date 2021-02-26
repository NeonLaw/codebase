import { Field } from '../forms/inputTypes';

export const questionFields: Field[] = [
  {
    name: 'prompt',
    required: true,
    type: 'string',
  },
  {
    name: 'questionType',
    options: [
      { label: 'Single Choice', value: 'single-choice' },
      { label: 'Single Date', value: 'single-date' },
      {
        label: 'Single File Upload',
        value: 'single-file-upload'
      },
      {
        label: 'Single Line Text',
        value: 'single-line-text'
      },
      {
        label: 'Text',
        value: 'text'
      },
      {
        label: 'Date Range',
        value: 'date-range'
      },
      {
        label: 'Number',
        value: 'number'
      },
      {
        label: 'Multiple File Upload',
        value: 'multiple-file-upload'
      },
    ],
    type: 'select',
  },
  {
    name: 'helpText',
    type: 'textarea',
  },
];
