import { IconButton, useColorMode } from '@chakra-ui/react';
import { Editor } from 'slate';
import { colors } from '../../../styles/neonLaw';
import { useSlate } from 'slate-react';


const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};


export const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  const { colorMode } = useColorMode();

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
