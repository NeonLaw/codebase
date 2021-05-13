import {
  Switch as ChakraSwitch,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';

export const Switch = ({
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
  testId,
  value = '',
  styles = {},
}) => {
  return (
    <FormControl isInvalid={errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <ChakraSwitch
        id={name}
        data-testid={testId}
        {...register(name)}
        name={name}
        onBlur={onBlur}
        onFocus={onFocus}
        defaultValue={value}
        style={{ ...styles }}
      />
      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};
