import { Box, Flex, Kbd, Skeleton, Stack, Text } from '@chakra-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { BsFillCircleFill } from 'react-icons/bs';
import { Flashcard } from './flashcard';
import { colors } from '../themes/neonLaw';
import { isCommandEnterPressed } from '../utils/keyboard';
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
  const [showFlashcardAnswer, changeShowFlashcardAnswer] = useState(false);

  const keyDownListener = useCallback((event) => {
    // keyCode 37 is the left arrow
    if (event.keyCode === 37) {
      if (selectedFlashcard === 0) {
        return changeSelectedFlashcard(flashcards.length - 1);
      }
      if (selectedFlashcard > 0) {
        return changeSelectedFlashcard(selectedFlashcard - 1);
      }
    }
    // keyCode 39 is the right arrow
    if (event.keyCode === 39) {
      if (selectedFlashcard === (flashcards.length - 1)) {
        return changeSelectedFlashcard(0);
      }
      if (selectedFlashcard < (flashcards.length - 1)) {
        return changeSelectedFlashcard(selectedFlashcard + 1);
      }
    }

    if (isCommandEnterPressed(event)) {
      return changeShowFlashcardAnswer(!showFlashcardAnswer);
    }
  }, [flashcards, selectedFlashcard, showFlashcardAnswer]);

  useEffect(() => {
    document.addEventListener('keydown', keyDownListener, false);

    return () => {
      document.removeEventListener('keydown', keyDownListener, false);
    };
  }, [keyDownListener]);

  return (
    <Box>
      {flashcards.length === 0 && (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      )}
      {flashcards.length > 0 && flashcards[selectedFlashcard] && (
        <Flashcard
          prompt={flashcards[selectedFlashcard].prompt}
          answer={flashcards[selectedFlashcard].answer}
          showAnswer={showFlashcardAnswer}
          toggleShowAnswer={changeShowFlashcardAnswer}
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
      <Box marginTop="1em">
        <Text>
          Press
          &nbsp;
          <Kbd border="1px solid #bbb" color="black">
            Left
          </Kbd>
          &nbsp;
          or
          &nbsp;
          <Kbd border="1px solid #bbb" color="black">
            Right
          </Kbd>
          &nbsp;
          to navigate among the flashcards. Press
          &nbsp;
          <Kbd border="1px solid #bbb" color="black">
            CMD
          </Kbd>
          &nbsp;
          +
          &nbsp;
          <Kbd border="1px solid #bbb" color="black">
            Enter
          </Kbd>
          &nbsp;
          to toggle the answer.
        </Text>
      </Box>
    </Box>
  );
};
