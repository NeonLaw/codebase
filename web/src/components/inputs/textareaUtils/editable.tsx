import { Box, Divider, useColorMode } from '@chakra-ui/react';
import { FaBold, FaItalic, FaUnderline } from 'react-icons/fa';
import { MarkButton, toggleMark } from './markButton';
import { BiCodeBlock } from 'react-icons/bi';
import { Editable as EditableSlate } from 'slate-react';
import { Toolbar } from './toolbar';
import { colors } from '../../../styles/neonLaw';
import { useCallback } from 'react';

export const Editable = ({ editor }) => {
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

  const Element = ({ attributes, children, element }) => {
    switch (element.type) {
      case 'block-quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>;
      case 'heading-one':
        return <h1 {...attributes}>{children}</h1>;
      case 'heading-two':
        return <h2 {...attributes}>{children}</h2>;
      case 'list-item':
        return <li {...attributes}>{children}</li>;
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>;
      default:
        return <p {...attributes}>{children}</p>;
    }
  };

  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const renderElement = useCallback(props => <Element {...props} />, []);

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
      </Toolbar>
      <Divider />
      <Box padding="20px">
        <EditableSlate
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={(event) => {
            if (!event.metaKey) {
              return;
            }

            switch (event.key) {
              case '`': {
                event.preventDefault();
                toggleMark(editor, 'code');
                break;
              }
              case 'b': {
                event.preventDefault();
                toggleMark(editor, 'bold');
                break;
              }
              case 'i': {
                event.preventDefault();
                toggleMark(editor, 'italic');
                break;
              }
              case 'u': {
                event.preventDefault();
                toggleMark(editor, 'underline');
                break;
              }
            }
          }}
        />
      </Box>
    </Box>
  );
};
