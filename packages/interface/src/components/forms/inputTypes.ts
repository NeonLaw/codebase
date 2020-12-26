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
  queryName?: string;
  labelColumn?: string;
}

interface TextareaInput extends BasicInput {
  type: 'textarea'
}

interface FlagSwitchInput extends BasicInput {
  type: 'flagSwitch';
  flagName: string;
}

export type Field =
  Id |
  StringInput |
  CodeEditorInput |
  SelectInput |
  SelectWithQueryInput |
  TextareaInput |
  FlagSwitchInput;
