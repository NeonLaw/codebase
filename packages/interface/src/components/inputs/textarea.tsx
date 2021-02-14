import {
  Box,
  Code,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react';
import React, { useCallback, useMemo } from 'react';
import { Slate, withReact } from 'slate-react';
import { Controller } from 'react-hook-form';
import { Editable } from './textareaUtils/editable';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';

const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <Code>{props.children}</Code>
    </pre>
  );
};

const DefaultElement = props => {
  return <Box {...props.attributes}>{props.children}</Box>;
};

export const Textarea = ({
  errors,
  label,
  name,
  testId,
  placeholder = '',
  control,
  defaultValue
}) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  // Define a rendering function based on the element passed to `props`. We use
  // `useCallback` here to memoize the function for subsequent renders.
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);
  const placeholderSlateText = [
    {
      children: [{ text: placeholder }],
      type: 'paragraph',
    },
  ];

  return (
    <FormControl isInvalid={errors && errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>

      <Controller
        render={({ onChange, value, ref }) => {
          return (
            <Slate
              editor={editor}
              ref={ref}
              value={value}
              renderElement={renderElement}
              onChange={onChange}
              children={
                <Box data-testid={testId}>
                  <Editable editor={editor} />
                </Box>
              }
            />
          );
        }}
        name={name}
        placeholder={placeholder}
        label={label}
        control={control}
        defaultValue={defaultValue || placeholderSlateText}
      />

      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};
