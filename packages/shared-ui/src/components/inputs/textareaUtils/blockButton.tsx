import { Editor, Transforms } from 'slate';
import { IconButton, useColorMode } from '@chakra-ui/core';
import React from 'react';
import { colors } from '@neonlaw/shared-ui/src/themes/neonLaw';
import { useSlate } from 'slate-react';

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

export const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  const { colorMode } = useColorMode();

  const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === format,
    });

    return !!match;
  };

  const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
      match: n => LIST_TYPES.includes(n.type as string),
      split: true,
    });

    Transforms.setNodes(editor, {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    });

    if (!isActive && isList) {
      const block = { children: [], type: format };
      Transforms.wrapNodes(editor, block);
    }
  };

  return (
    <IconButton
      size="sm"
      aria-label={format}
      color={isBlockActive(editor, format) ?
        colors.textareaToolbarActiveBackground[colorMode] :
        colors.textareaToolbarBackground[colorMode]
      }
      variant="ghost"
      onMouseDown={event => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
      icon={icon}
    />
  );
};
