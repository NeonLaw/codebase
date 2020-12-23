import { Box, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/core';

import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { default as ReactSelect } from 'react-select';
import { colors } from '../../themes/neonLaw';

export const SelectWithQuery = ({
  control,
  errors,
  label,
  labelColumn,
  queryName,
  name,
  testId,
  value = '',
}) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const {
    data,
    loading,
    error
  } = require('../../utils/api')[`use${capitalize(queryName)}Query`]();

  if (loading) {
    return (<h1>Loading</h1>);
  }
  if (error) {
    return (<h1>{JSON.stringify(error)}</h1>);
  }
  const nodes = data && data[queryName]?.nodes || [];

  const options = nodes.map((node) => ({
    label: node[labelColumn], value: node.id
  }));
  const defaultValue = options.find((option) => {
    return option.value === value;
  });

  return (
    <FormControl isInvalid={errors && errors[name]} color={'red'}>
      <FormLabel htmlFor={name}>
        {label}
      </FormLabel>
      <Box color={colors.text.light} data-testid={testId}>
        <Controller
          render={({ onChange }) => (
            <ReactSelect
              options={options}
              onChange={(option) => onChange(option.value)}
              name={name}
              defaultValue={defaultValue}
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
