import {
  Textarea as ChakraTextarea,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/core';

import React from 'react';

export const Textarea = ({
  errors,
  label,
  register,
  name,
  placeholder,
  testId,
  value = '',
  className = '',
  size = 'md',
  onBlur = () => {
    return;
  },
  onKeyDown = () => {
    return;
  },
  onChange = () => {
    return;
  },
  onFocus = () => {
    return;
  },
}) => {
  return (
    <FormControl isInvalid={errors && errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <ChakraTextarea
        className={className}
        data-testid={testId}
        ref={register}
        name={name}
        rows={size === 'xl' ? 10 : 5}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        borderColor="gray.300"
        defaultValue={value}
        _hover={{ borderColor: 'gray.500' }}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};
