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
    ],
    type: 'select',
  }
];
