/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Button, Text, useColorMode } from '@chakra-ui/core';
import React, { useState } from 'react';

import ReactDiffViewer from 'react-diff-viewer';
import { Textarea } from '../forms/base';
import { isShiftEnterPressed } from '../utils/keyboard';

interface FlashcardProps {
  prompt: string;
  answer: string;
  showAnswer: boolean;
  toggleShowAnswer: any;
}

export const Flashcard = ({
  prompt,
  answer,
  showAnswer,
  toggleShowAnswer,
}: FlashcardProps) => {
  const { colorMode } = useColorMode();

  const [userAnswer, changeUserAnswer] = useState('');

  return (
    <Box cursor="pointer" border="1px" borderRadius="0.5em" padding="2em">
      {!showAnswer ? (
        <>
          <Text className fontSize="1.2em" marginBottom="1em">
            {prompt}
          </Text>
          <Textarea
            className="flascard-textarea"
            onKeyDown={(e: React.KeyboardEvent) => {
              if (isShiftEnterPressed(e)) {
                e.preventDefault();
                toggleShowAnswer(true);
                setTimeout(() => {
                  const showPromptButton = document.querySelector(
                    '.show-prompt',
                  );
                  showPromptButton.focus();
                }, 5);
              }
            }}
            size="xl"
            value={userAnswer}
            onChange={(event) => {
              changeUserAnswer(event.target.value);
            }}
          />
          <Button
            marginTop="1em"
            onClick={() => {
              toggleShowAnswer(!showAnswer);
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
              toggleShowAnswer(false);
              setTimeout(() => {
                const text = document.querySelector('.flascard-textarea');
                text.focus();
                text.setSelectionRange(text.value.length, text.value.length);
              }, 5);
            }}
          >
            Try Typing the Answer
          </Button>
        </>
      )}
    </Box>
  );
};
