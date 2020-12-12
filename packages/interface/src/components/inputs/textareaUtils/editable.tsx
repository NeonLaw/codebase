import { AiOutlineOrderedList, AiOutlineUnorderedList } from 'react-icons/ai';
import { Box, Divider, Kbd, useColorMode } from '@chakra-ui/core';
import { Editor, Text, Transforms } from 'slate';
import { FaBold, FaItalic, FaQuoteRight, FaUnderline } from 'react-icons/fa';
import React, { useCallback } from 'react';
import { BiCodeBlock } from 'react-icons/bi';
import { BlockButton } from './blockButton';
import { Editable as EditableSlate } from 'slate-react';
import { MarkButton } from './markButton';
import { Toolbar } from './toolbar';
import { colors } from '../../../themes/neonLaw';

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

// const Element = ({ attributes, children, element }) => {
//   switch (element.type) {
//     case 'block-quote':
//       return <blockquote {...attributes}>{children}</blockquote>;
//     case 'bulleted-list':
//       return <ul {...attributes}>{children}</ul>;
//     case 'heading-one':
//       return <h1 {...attributes}>{children}</h1>;
//     case 'heading-two':
//       return <h2 {...attributes}>{children}</h2>;
//     case 'list-item':
//       return <li {...attributes}>{children}</li>;
//     case 'numbered-list':
//       return <ol {...attributes}>{children}</ol>;
//     default:
//       return <p {...attributes}>{children}</p>;
//   }
// };

// const HOTKEYS = {
//   'mod+`': 'code',
//   'mod+b': 'bold',
//   'mod+i': 'italic',
//   'mod+u': 'underline',
// };

export const Editable = ({ editor }) => {
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colors.textareaBackground[colorMode]}
    >
      <Toolbar>
        <MarkButton format="bold" icon={<FaBold />} />
        <MarkButton format="italic" icon={<FaItalic />} />
        <MarkButton format="underline" icon={<FaUnderline />} />
        <MarkButton format="code" icon={<BiCodeBlock />} />
        <BlockButton format="heading-one" icon={<Kbd children="1" />} />
        <BlockButton format="heading-two" icon={<Kbd children="2" />} />
        <BlockButton format="block-quote" icon={<FaQuoteRight />} />
        <BlockButton format="numbered-list" icon={<AiOutlineOrderedList />} />
        <BlockButton format="bulleted-list" icon={<AiOutlineUnorderedList />} />
      </Toolbar>
      <Divider />
      <Box padding="20px">
        <EditableSlate
          renderLeaf={renderLeaf}
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

              case 'b': {
                event.preventDefault();

                const [match] = Editor.nodes(editor, {
                  match: n => n.bold === true,
                  universal: true,
                });
                Transforms.setNodes(
                  editor,
                  { bold: match ? null : true },
                  { match: n => Text.isText(n), split: true }
                );
                break;
              }
            }
          }}
        />
      </Box>
    </Box>
  );
};
