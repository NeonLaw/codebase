/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Button, Text, Textarea, useColorMode } from '@chakra-ui/core';
import React, { useState } from 'react';
import ReactDiffViewer from 'react-diff-viewer';

interface FlashcardProps {
  prompt: string;
  answer: string;
}

export const Flashcard = ({ prompt, answer }: FlashcardProps) => {
  const { colorMode } = useColorMode();

  const [showPrompt, toggleShowPrompt] = useState(true);
  const [userAnswer, changeUserAnswer] = useState('');

  return (
    <Box
      cursor="pointer"
      border="1px"
      borderRadius="0.5em"
      padding="2em"
    >
      {showPrompt ?
        (<>
          <Text fontSize="1.2em" marginBottom="1em">
            {prompt}
          </Text>
          <Textarea
            value={userAnswer}
            onChange={(event) => { changeUserAnswer(event.target.value); }}
          />
          <Button
            marginTop="1em"
            onClick={() => { toggleShowPrompt(!showPrompt); }}
          >
            Show Answer
          </Button>
        </>) :
        (<>
          <Text fontSize="1.2em" marginBottom="1em">
            {prompt}
          </Text>
          {answer === userAnswer ?
            <Text>You got it!</Text> :
            <ReactDiffViewer
              oldValue={answer}
              newValue={userAnswer}
              hideLineNumbers={true}
              showDiffOnly={false}
              splitView={false}
              useDarkTheme={colorMode === 'dark'}
            />
          }
          <Button
            marginTop="1em"
            onClick={() => { toggleShowPrompt(!showPrompt); }}
          >
            Show Prompt
          </Button>
        </>
        )}
    </Box>
  );
};
