import {
  Box,
  Code,
  FormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/core';
import { Editable, Slate, withReact } from 'slate-react';
import { Editor, Text, Transforms, createEditor } from 'slate';
import React, { useCallback, useMemo } from 'react';
import { Controller } from 'react-hook-form';

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
          const placeholderSlate = [
            {
              children: [{ text: placeholder }],
              type: 'paragraph',
            },
          ];
          return (
            <>
              <p>{JSON.stringify(value)}</p>

              <Slate
                editor={editor}
                value={value || placeholderSlate}
                renderElement={renderElement}
                onChange={onChange}
                children={<Editable
                  onKeyDown={(event) => {
                    if (!event.metaKey) {
                      return;
                    }

                    switch (event.key) {
                      case '`': {
                        event.preventDefault();
                        const [match] = Editor.nodes(editor, {
                          match: n => n.type === 'code',
                        });
                        Transforms.setNodes(
                          editor,
                          { type: match ? 'paragraph' : 'code' },
                          { match: n => Editor.isBlock(editor, n) }
                        );
                        break;
                      }

                      // When "B" is pressed, bold the text in the selection.
                      case 'b': {
                        event.preventDefault();
                        Transforms.setNodes(
                          editor,
                          { bold: true },
                          { match: n => Text.isText(n), split: true }
                        );
                        break;
                      }
                    }
                  }}
                />}
              />
            </>
          );
        }}
        data-testid={testId}
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
