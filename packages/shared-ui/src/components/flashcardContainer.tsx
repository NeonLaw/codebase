import { Box, Flex } from '@chakra-ui/core';
import React, { useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { Flashcard } from './flashcard';
import { colors } from '../themes/neonLaw';
import { shuffleArray } from '../utils/shuffleArray';
import { useAllFlashcardsQuery } from '../utils/api';

const Circle = ({ onClick, key, active }) => {
  return (
    <BsFillCircleFill
      onClick={onClick}
      key={key}
      style={{ cursor: 'pointer' }}
      color={active ? colors.cyanDark : colors.cyanLight}
    />
  );
};

interface FlashcardContainerProps {
  topic: string;
}

export const FlashcardContainer = ({ topic }: FlashcardContainerProps) => {
  const { data } = useAllFlashcardsQuery({ variables: { topic } });
  const flashcards = shuffleArray(data?.allFlashcards?.nodes || []);
  const [selectedFlashcard, changeSelectedFlashcard] = useState(0);

  return (
    <Box>
      {flashcards.map((flashcard, i) => {
        if (i === selectedFlashcard) {
          return (
            <Flashcard
              prompt={flashcard.prompt}
              answer={flashcard.answer}
            />
          );
        }
        return null;
      })}
      <Box height="1em" />
      <Flex width="100%">
        <Flex margin="auto">
          {flashcards.map((flashcard, i) => {
            if (i === selectedFlashcard) {
              return (
                <Box margin="0 2px">
                  <Circle
                    onClick={() => { return; }}
                    key={i}
                    active={true}
                  />
                </Box>
              );
            }
            return (
              <Box margin="0 2px" key={i}>
                <Circle
                  key={i}
                  onClick={() => { changeSelectedFlashcard(i); }}
                  active={false}
                />
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <Box height="1em" />
    </Box >
  );
};
