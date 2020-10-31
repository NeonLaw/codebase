import { AiOutlineOrderedList, AiOutlineUnorderedList } from 'react-icons/ai';
import { Editable as EditableSlate, useSlate } from 'slate-react';
import { Editor, Text, Transforms } from 'slate';
import { FaBold, FaItalic, FaQuoteRight, FaUnderline } from 'react-icons/fa';
import { IconButton, Kbd } from '@chakra-ui/core';
import React, { useCallback } from 'react';
import { BiCodeBlock } from 'react-icons/bi';
import { Toolbar } from './toolbar';

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

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();

  return (
    <IconButton
      aria-label={format}
      colorScheme={isMarkActive(editor, format) ? 'black' : 'purple'}
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
      icon={icon}
    />
  );
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <IconButton
      aria-label={format}
      colorScheme={isBlockActive(editor, format) ? 'black' : 'white'}
      onMouseDown={event => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
      icon={icon}
    />
  );
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format,
  });

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

// const HOTKEYS = {
//   'mod+`': 'code',
//   'mod+b': 'bold',
//   'mod+i': 'italic',
//   'mod+u': 'underline',
// };

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

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

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export const Editable = ({ editor }) => {
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  return (
    <>
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
    </>
  );
};
