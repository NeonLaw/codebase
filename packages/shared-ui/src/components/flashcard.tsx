/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Button, Text, Textarea, useColorMode } from '@chakra-ui/core';
import React, { useRef, useState } from 'react';

import ReactDiffViewer from 'react-diff-viewer';
import { isShiftEnterPressed } from '../utils/keyboard';

interface FlashcardProps {
  prompt: string;
  answer: string;
}

export const Flashcard = ({ prompt, answer }: FlashcardProps) => {
  const { colorMode } = useColorMode();

  const textAreaRef = useRef(null);

  const [showPrompt, toggleShowPrompt] = useState(true);
  const [userAnswer, changeUserAnswer] = useState('');

  return (
    <Box cursor="pointer" border="1px" borderRadius="0.5em" padding="2em">
      {showPrompt ? (
        <>
          <Text className fontSize="1.2em" marginBottom="1em">
            {prompt}
          </Text>
          <Textarea
            ref={textAreaRef}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (isShiftEnterPressed(e)) {
                e.preventDefault();
                toggleShowPrompt(!showPrompt);
                setTimeout(() => {
                  document.querySelector('.show-prompt').focus();
                }, 10);
              }
            }}
            value={userAnswer}
            onChange={(event) => {
              changeUserAnswer(event.target.value);
            }}
          />
          <Button
            marginTop="1em"
            onClick={() => {
              toggleShowPrompt(!showPrompt);
            }}
          >
            Show Answer
          </Button>
        </>
      ) : (
        <>
          <Text fontSize="1.2em" marginBottom="1em">
            {prompt}
          </Text>
          {answer === userAnswer ? (
            <Text>You got it!</Text>
          ) : (
            <ReactDiffViewer
              oldValue={answer}
              newValue={userAnswer}
              hideLineNumbers={true}
              showDiffOnly={false}
              splitView={false}
              useDarkTheme={colorMode === 'dark'}
            />
          )}
          <Button
            marginTop="1em"
            className="show-prompt"
            onClick={() => {
              toggleShowPrompt(!showPrompt);
              setTimeout(() => {
                const text = textAreaRef.current;
                text.focus();
                text.setSelectionRange(text.value.length, text.value.length);
              }, 10);
            }}
          >
            Show Prompt
          </Button>
        </>
      )}
    </Box>
  );
};
