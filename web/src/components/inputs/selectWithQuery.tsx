import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/react';

import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { default as ReactSelect } from 'react-select';
import { colors } from '../../styles/neonLaw';
import { kebabCase } from 'voca';

export const SelectWithQuery = ({
  control,
  errors,
  label,
  labelColumn,
  collection,
  name,
  testId,
  defaultValue,
}) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const {
    data,
    loading,
    error
  } = require('../../utils/api')[`useAll${capitalize(collection)}Query`]();

  if (loading) {
    return (<h3>Loading</h3>);
  }
  if (error) {
    return (<Box color="red">{JSON.stringify(error)}</Box>);
  }
  const nodes = data && data[collection]?.nodes || [];

  const options = nodes.map((node) => ({
    label: node[labelColumn], value: node.id
  }));
  const defaultValueForSelect = options.find((option) => {
    return option.value === defaultValue;
  });

  return (
    <FormControl isInvalid={errors && errors[name]} color={'red'}>
      <FormLabel htmlFor={name}>
        {label}
      </FormLabel>
      <Box color={colors.text.light} data-testid={testId}>
        <Controller
          render={({ field: { onChange }}) => (
            <ReactSelect
              options={options}
              classNamePrefix={`react-select-${kebabCase(name)}`}
              onChange={(option) => onChange(option.value)}
              name={name}
              defaultValue={defaultValueForSelect}
            />
          )}
          name={name}
          control={control}
        />
      </Box>
      <FormErrorMessage>
        <ErrorMessage errors={errors} name={name} />
      </FormErrorMessage>
    </FormControl>
  );
};
