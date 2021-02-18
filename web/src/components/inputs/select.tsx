import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/react';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { default as ReactSelect } from 'react-select';
import { colors } from '../../styles/neonLaw';
import { kebabCase } from 'voca';

export const Select = ({
  control,
  errors,
  label,
  name,
  testId,
  options,
  defaultValue,
}) => {
  const defaultValueForSelect = options.find((option) => {
    return option.value === defaultValue;
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
