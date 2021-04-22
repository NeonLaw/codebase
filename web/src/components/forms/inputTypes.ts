interface Option {
  label: string;
  value: string;
}

interface BasicInput {
  name: string;
  required?: boolean;
}

interface Id extends BasicInput {
  type: 'id'
}

interface CodeEditorInput extends BasicInput {
  type: 'codeEditor'
}

interface StringInput extends BasicInput {
  type: 'string'
}

interface SelectInput extends BasicInput {
  type: 'select';
  options: Option[]
}

interface SelectWithQueryInput extends BasicInput {
  type: 'selectWithQuery';
  collection: string;
  labelColumn: string;
}

interface TextareaInput extends BasicInput {
  type: 'textarea'
}

interface Captcha extends BasicInput {
  type: 'captcha'
}

export type Field =
  Id |
  StringInput |
  CodeEditorInput |
  SelectInput |
  SelectWithQueryInput |
  TextareaInput |
  Captcha;
