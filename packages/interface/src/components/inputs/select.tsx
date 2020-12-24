import { Box, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/core';

import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { default as ReactSelect } from 'react-select';
import { colors } from '../../themes/neonLaw';
import { kebabCase } from 'voca';

export const Select = ({
  control,
  errors,
  label,
  name,
  testId,
  options,
  value = '',
}) => {
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
          render={({ onChange }) => (
            <ReactSelect
              options={options}
              classNamePrefix={`react-select-${kebabCase(name)}`}
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
