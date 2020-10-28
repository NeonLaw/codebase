import React, { useEffect, useMemo, useState } from "react";
import { RHFInput } from 'react-hook-form-input'
import { Slate, Editable, withReact } from 'slate-react'
import {
  FormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/core';
import { createEditor } from 'slate'


export const Textarea = ({
  errors,
  label,
  register,
  name,
  placeholder,
  testId,
  value = [],
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
  setValue = (_) => {
  }
}) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  // Keep track of state for the value of the editor.
  return null

  return (
    <FormControl isInvalid={errors && errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>

      <RHFInput
        as={
         <Slate
            editor={editor}
            value={value}
            onChange={newValue => { setValue(newValue) }}
          >
           <Editable />
          </Slate>
        }
        data-testid={testId}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        register={register}
        setValue={setValue}
      />

      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};
