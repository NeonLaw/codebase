import {
  Box,
  Code,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/core';
import React, { useCallback, useMemo, useState } from 'react';
import { Slate, withReact } from 'slate-react';
import { convertHtmlToSlate, convertSlateToHtml } from '../../utils/slate';
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

interface TextAreaProps {
  errors: any;
  label: string;
  name: string;
  testId: string;
  placeholder: string;
  control: any;
  value: string;
}

export const Textarea = ({
  errors,
  label,
  name,
  testId,
  placeholder = '',
  value,
  control,
}: TextAreaProps) => {
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

  const [slateText, updateSlateText] = useState(
    convertHtmlToSlate(value || placeholder)
  );

  return (
    <FormControl isInvalid={errors && errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>

      <Controller
        render={({ onChange }) => {
          return (
            <Slate
              editor={editor}
              value={slateText}
              renderElement={renderElement}
              onChange={(slateInput) => {
                updateSlateText(slateInput);
                const html = convertSlateToHtml(slateInput);
                onChange(html);
              }}
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
      />

      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};
