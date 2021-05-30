import { EditorContent, useEditor } from '@tiptap/react';
import { FaBold, FaItalic, FaUnderline } from 'react-icons/fa';
import { colors, gutters } from '../../styles/neonLaw';

import { BiCodeBlock } from 'react-icons/bi';
import Code from '@tiptap/extension-code';
import { IconButton } from '@chakra-ui/button';
import React from 'react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { borders } from '../../styles/deleteYourData';
import styled from '@emotion/styled';
import { useColorMode } from '@chakra-ui/color-mode';

const StyledMenuBar = styled.div``;

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <StyledMenuBar>
      <IconButton
        aria-label="Bold"
        variant="ghost"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
        icon={<FaBold />}
      />
      <IconButton
        aria-label="Italic"
        variant="ghost"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
        icon={<FaItalic />}
      />
      <IconButton
        aria-label="Underline"
        variant="ghost"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
        icon={<FaUnderline />}
      />
      <IconButton
        aria-label="Code"
        variant="ghost"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
        icon={<BiCodeBlock />}
      />
    </StyledMenuBar>
  );
};

const StyledTipTap = styled.div`
  padding: ${gutters.xSmallOne} ${gutters.xSmall};

  .content {
    margin-top: ${gutters.xSmall};
    padding: ${gutters.xSmallOne} ${gutters.xSmall};
  }
`;

export const Tiptap = () => {
  const { colorMode } = useColorMode();

  const editor = useEditor({
    content: 'Enter the help text for the question.',
    extensions: [StarterKit, Underline, Code],
  });

  return (
    <StyledTipTap
      style={{
        background: colors.textareaBackground[colorMode],
        border: `1px solid ${colors.inputBorders[colorMode]}`,
      }}
    >
      <MenuBar editor={editor} />
      <div
        className="content"
        style={{ border: `1px solid ${colors.borders[colorMode]}` }}
      >
        <EditorContent editor={editor} />
      </div>
    </StyledTipTap>
  );
};
