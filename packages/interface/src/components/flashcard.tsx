/* eslint-disable */
// @ts-nocheck
/* eslint-enable */

import { Box, Text, useColorMode } from '@chakra-ui/core';
import React, { useRef, useState } from 'react';
import { Button } from './button';
import ReactDiffViewer from 'react-diff-viewer';
import { Textarea } from './inputs';
import { gutters } from '../themes/neonLaw';
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
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = async ({ answer }) => {
    changeUserAnswer(answer);
    toggleShowAnswer(true);
  };
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Box cursor="pointer" border="1px" borderRadius="0.5em" padding="2em">
      {!showAnswer ? (
        <form
          onSubmit={handleSubmit(onSubmit as any)}
          ref={formRef}
        >
          <Text fontSize="1.2em" marginBottom="1em">
            {prompt}
          </Text>
          <Textarea
            testId="flashcard-textarea"
            control={control}
            name="answer"
            label="answer"
            placeholder="Type in the answer"
            value={userAnswer}
            errors={errors}
          />
          <Button
            data-testid="flashcard-form-submit"
            flash={false}
            type="submit"
            containerStyles={{marginTop: gutters.xSmallOne}}
          >
            Show Answer
          </Button>
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
          <Button
            flash={false}
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
          </Button>
        </>
      )}
    </Box>
  );
};
