import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/core';
import React from 'react';

export const StringInput = ({
  errors,
  label,
  register,
  name,
  onBlur = () => { return; },
  onFocus = () => { return; },
  placeholder,
  testId,
  value = '',
}) => {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <Input
        data-testid={testId}
        ref={register}
        name={name}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        borderColor="gray.300"
        defaultValue={value}
        _hover={{ borderColor: 'gray.500' }}
        className="outline-bordered"
      />
      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl >
  );
};
