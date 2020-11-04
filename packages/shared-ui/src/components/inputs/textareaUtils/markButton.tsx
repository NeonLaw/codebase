import { IconButton, useColorMode } from '@chakra-ui/core';
import { Editor } from 'slate';
import React from 'react';
import { colors } from '@neonlaw/shared-ui/src/themes/neonLaw';
import { useSlate } from 'slate-react';


export const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  const { colorMode } = useColorMode();

  const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  return (
    <IconButton
      size="sm"
      aria-label={format}
      color={isMarkActive(editor, format) ?
        colors.textareaToolbarActiveBackground[colorMode] :
        colors.textareaToolbarBackground[colorMode]
      }
      variant="ghost"
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
      icon={icon}
    />
  );
};
