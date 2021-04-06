import { BaseEditor, createEditor } from 'slate';
import { Box, FormControl, FormErrorMessage } from '@chakra-ui/react';
import { HistoryEditor, withHistory } from 'slate-history';
import { ReactEditor, Slate, withReact } from 'slate-react';
import { Controller } from 'react-hook-form';
import { Editable } from './textareaUtils/editable';
import { useMemo } from 'react';

declare module 'slate' {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor & HistoryEditor
    }
}

export const Textarea = ({
  errors,
  name,
  testId,
  placeholder = '',
  control,
  defaultValue
}) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const placeholderSlateText = [
    {
      children: [{ text: placeholder }],
      type: 'paragraph',
    },
  ];

  return (
    <FormControl isInvalid={errors && errors[name]}>
      <Box borderWidth="1px">
        <Controller
          render={({ field: { onChange, value }}) => {
            return (
              <Slate
                editor={editor}
                value={value}
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
          control={control}
          defaultValue={defaultValue || placeholderSlateText}
        />
      </Box>

      <FormErrorMessage>
        {errors && errors[name] && errors[name].message}
      </FormErrorMessage>
    </FormControl>
  );
};
