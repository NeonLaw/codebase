import { Box, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/core';

import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { default as ReactSelect } from 'react-select';
import { colors } from '../../themes/neonLaw';

export const SelectWithQuery = ({
  control,
  query,
  labelColumn,
  queryName,
  errors,
  label,
  name,
  testId,
  value = '',
}) => {
  const { loading, data, error } = query();

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
      <FormLabel htmlFor="name">
        {label}
      </FormLabel>
      <Box color={colors.text.light} data-testid={testId}>
        <Controller
          as={ReactSelect}
          name={name}
          control={control}
          options={options}
          defaultValue={defaultValue || options[0]}
        />
      </Box>
      <FormErrorMessage>
        <ErrorMessage errors={errors} name={name} />
      </FormErrorMessage>
    </FormControl>
  );
};
