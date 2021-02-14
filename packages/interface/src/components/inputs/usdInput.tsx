import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { FaDollarSign } from 'react-icons/fa';
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
      <InputGroup>
        <InputLeftAddon children={<FaDollarSign />} />
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
      </InputGroup>
      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};
