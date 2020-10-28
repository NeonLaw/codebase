import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/core';
import { Editable, Slate, withReact } from 'slate-react';
import { Editor, Transforms, createEditor } from 'slate';
import React, { useCallback, useMemo } from 'react';
import { Controller } from 'react-hook-form';

const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
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
  control,
}) => {
  const editor = useMemo(() => withReact(createEditor()), []);

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

  return (
    <FormControl isInvalid={errors && errors[name]}>
      <FormLabel htmlFor="name">{label}</FormLabel>

      <Controller
        render={({ onChange, value }) => {
          const placeholder = [
            {
              children: [{ text: 'Please write here' }],
              type: 'paragraph',
            },
          ];
          return (
            <Slate
              editor={editor}
              value={value || placeholder}
              renderElement={renderElement}
              onChange={onChange}
              children={<Editable
                onKeyDown={(event) => {
                  if (event.key === '`' && event.ctrlKey) {
                    // Prevent the "`" from being inserted by default.
                    event.preventDefault();
                    // Otherwise, set the currently selected blocks type to
                    // "code".
                    Transforms.setNodes(
                      editor,
                      { type: 'code' },
                      { match: n => Editor.isBlock(editor, n) }
                    );
                  }
                  return;
                }}
              />}
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
