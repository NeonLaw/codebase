import { Controller, ErrorMessage } from 'react-hook-form';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/core';
import React from 'react';
import { default as ReactSelect } from 'react-select';
import { useIntl } from 'gatsby-plugin-intl';

export const Select = ({
  control,
  errors,
  name,
  testId,
  options
}) => {
  const intl = useIntl();

  return (
    <FormControl isInvalid={errors && errors[name]}>
      <FormLabel htmlFor="name">
        {intl.formatMessage({ id: `forms.${name}.label` })}
      </FormLabel>
      <Controller
        as={ReactSelect}
        data-testid={testId}
        name={name}
        control={control}
        options={options}
      // onChange={([selected]) => {
      //   alert(JSON.stringify(selected));
      //   return selected.value;
      // }}
      />
      <FormErrorMessage>
        <ErrorMessage errors={errors} name={name} />
      </FormErrorMessage>
    </FormControl>
  );
};
