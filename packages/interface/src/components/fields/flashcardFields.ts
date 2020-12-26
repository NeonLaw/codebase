import { Field } from '../forms/inputTypes';

export const flashcardFields: Field[] = [
  {
    name: 'prompt',
    required: true,
    type: 'string',
  },
  {
    name: 'answer',
    required: true,
    type: 'textarea'
  }
];
