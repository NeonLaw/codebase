import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/core';

import React from 'react';

export const UsdInput = ({
  errors,
  label,
  register,
  name,
  onBlur = () => {
    return;
  },
  onFocus = () => {
    return;
  },
  placeholder,
  testId,
  value = '',
  styles = {},
}) => {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        data-testid={testId}
        ref={register}
        name={name}
        type="number"
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        borderColor="gray.300"
        defaultValue={value}
        _hover={{ borderColor: 'gray.500' }}
        className="outline-bordered"
        style={{ ...styles }}
        step="0.01"
      />
      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};
