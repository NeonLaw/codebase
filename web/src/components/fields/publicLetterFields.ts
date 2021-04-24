import { Field } from '../forms/inputTypes';

export const publicLetterFields: Field[] = [
  {
    name: 'body',
    required: true,
    type: 'textarea',
  },
  {
    name: 'addressorId',
    required: true,
    type: 'id',
  },
  {
    name: 'addresseeId',
    required: true,
    type: 'id',
  },
  {
    name: 'captchaToken',
    required: true,
    type: 'captcha',
  }
];
