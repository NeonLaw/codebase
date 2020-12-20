import React from 'react';
import { Select, StringInput } from '../inputs';
import { useIntl } from 'gatsby-plugin-intl';
import { gutters } from '../../themes/neonLaw';
import { kebabCase, snakeCase } from 'voca';

export interface Option {
  label: string;
  value: string;
}

export interface Field {
  name: string;
  type: 'string' | 'codeEditor' | 'select';
  options?: Option[];
  required?: boolean;
}

interface InputBuilderProps {
  resourceName: string;
  fields: Field[];
  setFocus(value: boolean): void;
  errors: any;
  register(any): void;
  currentValues: any;
  control: any;
}

export const InputBuilder = ({
  control,
  register,
  currentValues,
  errors,
  resourceName,
  fields,
  setFocus,
}: InputBuilderProps) => {
  const dasherizedResourceName = kebabCase(resourceName);
  const intl = useIntl();

  return (
    <>
      {fields.map((field, i) => {
        const { name, type, options } = field;
        const dasherizedFieldName = kebabCase(name);
        const underscoreFieldName = snakeCase(name);
        const testId = `${dasherizedResourceName}-form-${dasherizedFieldName}`;

        switch (type) {
          case 'string':
            return (
              <StringInput
                key={i}
                name={name}
                testId={testId}
                label={intl.formatMessage({
                  id: `forms-${underscoreFieldName}-label`,
                })}
                errors={errors}
                onFocus={() => {
                  setFocus(true);
                }}
                onBlur={() => {
                  setFocus(false);
                }}
                value={currentValues && currentValues[name]}
                placeholder={intl.formatMessage({
                  id: `forms.${underscoreFieldName}.placeholder`,
                })}
                register={
                  field.required
                    ? register({
                        required: intl.formatMessage({
                          id: `forms.${underscoreFieldName}.required`,
                        }),
                      })
                    : register({})
                }
                styles={{ marginBottom: gutters.xSmallOne }}
              />
            );
          case 'select':
            return (
              <Select
                name={name}
                label={intl.formatMessage({
                  id: `forms.${underscoreFieldName}.label`,
                })}
                options={options}
                errors={errors}
                testId={testId}
                control={control}
              />
            );
        }
      })}
    </>
  );
};
