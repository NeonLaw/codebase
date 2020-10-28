import React, { useEffect, useMemo, useState } from "react";
import { Controller } from 'react-hook-form';
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
  name,
  testId,
  control,
}) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <FormControl isInvalid={errors && errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>

      <Controller
        render={({ onChange, value }) => {
          const placeholder = [
            {
              type: 'paragraph',
              children: [{ text: 'Please write here' }],
            },
          ]
          return (
            <Slate
                editor={editor}
                value={value || placeholder}
                onChange={onChange}
                children={<Editable />}
              />
            );
        }}
        data-testid={testId}
        name={name}
        control={control}
      />

      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};
