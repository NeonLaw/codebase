import { Box, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/core';

import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { default as ReactSelect } from 'react-select';
import { colors } from '../../themes/neonLaw';
import { useIntl } from 'gatsby-plugin-intl';

export const Select = ({
  control,
  errors,
  name,
  testId,
  options,
  value = '',
}) => {
  const intl = useIntl();

  return (
    <FormControl isInvalid={errors && errors[name]} color={'red'}>
      <FormLabel htmlFor="name">
        {intl.formatMessage({ id: `forms.${name}.label` })}
      </FormLabel>
      <Box color={colors.text.light}>
        <Controller
          as={ReactSelect}
          data-testid={testId}
          name={name}
          control={control}
          options={options}
          defaultValue={{
            label: options.find((option) => {
              return option.value === value;
            }).label,
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
