import { Box, Flex } from '@chakra-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { Flashcard } from './flashcard';
import { colors } from '../themes/neonLaw';
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

export const FlashcardContainer = () => {
  const { data } = useAllFlashcardsQuery();
  const flashcards = data?.allFlashcards?.nodes || [];
  const [selectedFlashcard, changeSelectedFlashcard] = useState(0);

  const arrowKeyDownFunction = useCallback((event) => {
    // keyCode 37 is the left arrow
    if (event.keyCode === 37) {
      if (selectedFlashcard > 0) {
        return changeSelectedFlashcard(selectedFlashcard - 1);
      }
    }
    // keyCode 39 is the right arrow
    if (event.keyCode === 39) {
      if (selectedFlashcard < (flashcards.length - 1)) {
        return changeSelectedFlashcard(selectedFlashcard + 1);
      }
    }
  }, [flashcards, selectedFlashcard]);

  useEffect(() => {
    document.addEventListener('keydown', arrowKeyDownFunction, false);

    return () => {
      document.removeEventListener('keydown', arrowKeyDownFunction, false);
    };
  }, [arrowKeyDownFunction]);

  return (
    <Box>
      {flashcards.length > 0 && flashcards[selectedFlashcard] && (
        <Flashcard
          prompt={flashcards[selectedFlashcard].prompt}
          answer={flashcards[selectedFlashcard].answer}
        />
      )}
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
