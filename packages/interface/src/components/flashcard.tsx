/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Text, useColorMode } from '@chakra-ui/core';
import React, { useRef, useState } from 'react';

import { FlashButton } from './button';
import { Node } from 'slate';
import ReactDiffViewer from 'react-diff-viewer';
import { Textarea } from './inputs';
import { gutters } from '../themes/neonLaw';
import { isShiftEnterPressed } from '../utils/keyboard';
import { useForm } from 'react-hook-form';

interface FlashcardProps {
  prompt: string;
  answer: string;
  showAnswer: boolean;
  toggleShowAnswer: any;
  setIsTextAreaFocused: any;
}

export const Flashcard = ({
  prompt,
  answer,
  showAnswer,
  toggleShowAnswer,
}: FlashcardProps) => {
  const { colorMode } = useColorMode();

  const [userAnswer, changeUserAnswer] = useState('');
  const { control, handleSubmit } = useForm();

  const onSubmit = async ({ answer }) => {
    const answerText = answer.map(n => Node.string(n)).join('\n');
    changeUserAnswer(answerText);
  };
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Box cursor="pointer" border="1px" borderRadius="0.5em" padding="2em">
      {!showAnswer ? (
        <form
          onSubmit={handleSubmit(onSubmit as any)}
          ref={formRef}
        >
          <Text className fontSize="1.2em" marginBottom="1em">
            {prompt}
          </Text>
          <Textarea
            className="flascard-textarea"
            control={control}
            name="answer"
            onKeyDown={(e: React.KeyboardEvent) => {
              if (isShiftEnterPressed(e)) {
                e.preventDefault();
                toggleShowAnswer(true);
                setTimeout(() => {
                  const showPromptButton = document.querySelector(
                    '.show-prompt',
                  );
                  showPromptButton && showPromptButton.focus();
                }, 10);
              }
            }}
            size="xl"
            value={userAnswer}
          />
          <FlashButton
            type="submit"
            containerStyles={{marginTop: gutters.xSmallOne}}
            onClick={() => {
              toggleShowAnswer(!showAnswer);
            }}
          >
            Show Answer
          </FlashButton>
        </form>
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
          <FlashButton
            containerStyles={{marginTop: gutters.xSmallOne}}
            className="show-prompt"
            onClick={() => {
              toggleShowAnswer(false);
              setTimeout(() => {
                const text = document.querySelector('.flascard-textarea');
                if (!text) { return; }
                text.focus();
                text.value = userAnswer;
                text.setSelectionRange(text.value.length, text.value.length);
              }, 10);
            }}
          >
            Try Typing the Answer
          </FlashButton>
        </>
      )}
    </Box>
  );
};
