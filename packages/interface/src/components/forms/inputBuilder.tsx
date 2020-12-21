import { Select, StringInput } from '../inputs';
import { kebabCase, snakeCase } from 'voca';
import React from 'react';
import { gutters } from '../../themes/neonLaw';
import { useIntl } from 'gatsby-plugin-intl';

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
}: InputBuilderProps) => {
  const dasherizedResourceName = kebabCase(resourceName);
  const intl = useIntl();

  return (
    <>
      {fields.map((field, i) => {
        const { name, type, options, required } = field;
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
                value={currentValues && currentValues[name]}
                placeholder={intl.formatMessage({
                  id: `forms.${underscoreFieldName}.placeholder`,
                })}
                register={
                  required
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
                key={i}
                label={intl.formatMessage({
                  id: `forms.${underscoreFieldName}.label`,
                })}
                options={options}
                errors={errors}
                testId={testId}
                control={control}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};
