import { Box } from '@chakra-ui/core';
import { Flashcard } from './flashcard';
import React from 'react';
import { shuffleArray } from '../utils/shuffleArray';
import { useAllFlashcardsQuery } from '../utils/api';

interface FlashcardContainerProps {
  topic: string;
}

export const FlashcardContainer = ({ topic }: FlashcardContainerProps) => {
  const { data } = useAllFlashcardsQuery({ variables: { topic } });
  const flashcards = shuffleArray(data?.allFlashcards?.nodes || []);

  return (
    <Box>
      {flashcards.map((flashcard, i) => (
        <Flashcard
          key={i}
          prompt={flashcard.prompt}
          answer={flashcard.answer}
        />
      ))}
    </Box>
  );
};
