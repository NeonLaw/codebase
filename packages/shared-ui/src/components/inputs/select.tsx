import { Box, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/core';

import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { default as ReactSelect } from 'react-select';
import { colors } from '../../themes/neonLaw';

export const Select = ({
  control,
  errors,
  label,
  name,
  testId,
  options,
  value = '',
}) => {

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
          defaultValue={{
            label: options.find((option) => {
              return option.value === value;
            })?.label,
            value: value,
          }}
        />
      </Box>
      <FormErrorMessage>
        <ErrorMessage errors={errors} name={name} />
      </FormErrorMessage>
    </FormControl>
  );
};
