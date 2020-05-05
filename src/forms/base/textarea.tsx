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
  placeholder
}) => {
  return (
    <FormControl isInvalid={errors && errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <ChakraTextarea
        ref={register}
        name={name}
        placeholder={placeholder}
        borderColor="gray.300"
        _hover={{ borderColor: 'gray.500' }}
      />
      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};
