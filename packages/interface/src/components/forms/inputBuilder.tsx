import { Select, SelectWithQuery, StringInput, Textarea } from '../inputs';
import { kebabCase, snakeCase } from 'voca';
import { Field } from './inputTypes';
import React from 'react';
import { gutters } from '../../themes/neonLaw';
import { useIntl } from 'gatsby-plugin-intl';

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
        const {
          name,
          type,
          options,
          required,
          queryName,
          labelColumn
        } = (field as any);
        const dasherizedFieldName = kebabCase(name);
        const underscoreFieldName = snakeCase(name);
        const testId = `${dasherizedResourceName}-form-${dasherizedFieldName}`;
        const label = intl.formatMessage({
          id: `forms.${underscoreFieldName}.label`,
        });

        switch (type) {
          case 'id':
            return (
              <input
                key={i}
                name={name}
                type="hidden"
                value={currentValues[name]}
                ref={register}
              />
            );
          case 'codeEditor':
            return (
              <StringInput
                key={i}
                name={name}
                testId={testId}
                label={label}
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
          case 'string':
            return (
              <StringInput
                key={i}
                name={name}
                testId={testId}
                label={label}
                errors={errors}
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
                value={currentValues && currentValues[name]}
              />
            );
          case 'textarea':
            return (
              <Textarea
                key={i}
                name={name}
                testId={testId}
                label={label}
                errors={errors}
                placeholder={intl.formatMessage({
                  id: `forms.${underscoreFieldName}.placeholder`,
                })}
                control={control}
                value={currentValues && currentValues[name]}
              />
            );
          case 'select':
            return (
              <Select
                name={name}
                key={i}
                label={label}
                options={options}
                errors={errors}
                testId={testId}
                control={control}
              />
            );
          case 'selectWithQuery':
            return (
              <SelectWithQuery
                key={i}
                name={name}
                label={label}
                queryName={queryName}
                labelColumn={labelColumn}
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
