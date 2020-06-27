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
  placeholder,
  testId,
}) => {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <Input
        data-testid={testId}
        ref={register}
        name={name}
        placeholder={placeholder}
        borderColor="gray.300"
        _hover={{ borderColor: 'gray.500' }}
        className="outline-bordered"
      />
      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl >
  );
};
