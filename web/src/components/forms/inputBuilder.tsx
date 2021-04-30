import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import { Select, SelectWithQuery, StringInput, Textarea } from '../inputs';
import { kebabCase, snakeCase } from 'voca';
import { Controller } from 'react-hook-form';
import { Field } from './inputTypes';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { gutters } from '../../styles/neonLaw';
import { useIntl } from 'react-intl';

interface InputBuilderProps {
  resourceName: string;
  fields: Field[];
  errors: any;
  register(...any): void;
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
          collection,
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
                type="hidden"
                value={currentValues[name]}
                {...register(name)}
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
                register={register}
                required={intl.formatMessage({
                  id: `forms.${underscoreFieldName}.required`,
                })}
                styles={{ marginBottom: gutters.xSmallOne }}
                value={currentValues && currentValues[name]}
              />
            );
          case 'textarea':
            return (
              <Textarea
                key={i}
                name={name}
                errors={errors}
                placeholder={intl.formatMessage({
                  id: `forms.${underscoreFieldName}.placeholder`,
                })}
                control={control}
                defaultValue={currentValues && currentValues[name]}
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
                defaultValue={currentValues && currentValues[name]}
              />
            );
          case 'selectWithQuery':
            return (
              <SelectWithQuery
                key={i}
                name={name}
                label={label}
                collection={collection}
                labelColumn={labelColumn}
                errors={errors}
                testId={testId}
                control={control}
                defaultValue={currentValues && currentValues[name]}
              />
            );
          case 'captcha':
            return (
              <Controller
                control={control}
                key={i}
                name={name}
                rules={{ required: 'Captcha is required' }}
                render={({ field: { onChange, ref } }) =>  {
                  const onExpire = () => {
                    console.log('hCaptcha Token Expired');
                  };

                  const onError = (err) => {
                    console.log(`hCaptcha Error: ${err}`);
                  };

                  return (
                    <FormControl isInvalid={errors[name]}>
                      {label && (<FormLabel htmlFor={name}>{label}</FormLabel>)}
                      <HCaptcha
                        sitekey="5965395f-bcf7-44f0-a273-8653fac15834"
                        onVerify={onChange}
                        onError={onError}
                        onExpire={onExpire}
                        ref={ref}
                      />
                      {errors[name] && (<FormErrorMessage>
                        {errors[name].message}
                      </FormErrorMessage>)}
                    </FormControl>
                  );
                }}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
};
