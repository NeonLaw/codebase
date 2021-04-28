import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
} from '@chakra-ui/react';
import { FaDollarSign } from 'react-icons/fa';

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
  required = undefined,
  testId,
  value = '',
  styles = {},
}) => {
  const registerValdations = required ? { required } : {};

  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <InputGroup>
        <InputLeftAddon children={<FaDollarSign />} />
        <Input
          data-testid={testId}
          {...register(name, registerValdations)}
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
