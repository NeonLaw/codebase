import { Box, Button, Textarea } from '@chakra-ui/core';
import React, { useState } from 'react';
import { useAllFlashcardsQuery } from '@utils/api';

interface FlashcardProps {
  topic: string;
}

export const Flashcard = ({ topic }: FlashcardProps) => {
  const { data } = useAllFlashcardsQuery({ variables: { topic } });
  const flashcard = data?.allFlashcards?.nodes[0] ||
    { answer: undefined, prompt: undefined };

  const { prompt, answer } = flashcard;
  const [showPrompt, toggleShowPrompt] = useState(true);
  const [userAnswer, changeUserAnswer] = useState('');

  return (
    <Box
      cursor="pointer"
      border="1px"
      padding="2em"
    >
      {showPrompt ?
        (<>
          {prompt}
          <Textarea
            onChange={(event) => { changeUserAnswer(event.target.value); }}
          />
          <Button
            onClick={() => { toggleShowPrompt(!showPrompt); }}
          >
            Show Answer
          </Button>
        </>) :
        (<>
          {answer}
          <Box>
            Your Answer:&nbsp;
            {userAnswer}
          </Box>
          <Button
            onClick={() => { toggleShowPrompt(!showPrompt); }}
          >
            Show Prompt
          </Button>
        </>
        )}
    </Box>
  );
};
