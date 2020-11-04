import { Box, Flex, Kbd, Skeleton, Stack, Text } from '@chakra-ui/core';
import React, { useCallback, useEffect, useState } from 'react';
import { isCommandEnterPressed, isShiftEnterPressed } from '../utils/keyboard';

import { BsFillCircleFill } from 'react-icons/bs';
import { Flashcard } from './flashcard';
import { colors } from '../themes/neonLaw';
import { useAllFlashcardsQuery } from '../utils/api';
import { useOS } from '../utils/useOS';

const Circle = ({ onClick, active }) => {
  return (
    <BsFillCircleFill
      onClick={onClick}
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
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const OS = useOS();

  const keyDownListener = useCallback(
    (event) => {
      if (isTextAreaFocused) {
        return;
      }
      if (event.key === 'ArrowLeft') {
        if (selectedFlashcard === 0) {
          return changeSelectedFlashcard(flashcards.length - 1);
        }
        if (selectedFlashcard > 0) {
          return changeSelectedFlashcard(selectedFlashcard - 1);
        }
      }
      if (event.key === 'ArrowRight') {
        if (selectedFlashcard === flashcards.length - 1) {
          return changeSelectedFlashcard(0);
        }
        if (selectedFlashcard < flashcards.length - 1) {
          return changeSelectedFlashcard(selectedFlashcard + 1);
        }
      }

      if (
        OS == 'Mac OS'
          ? isCommandEnterPressed(event)
          : isShiftEnterPressed(event)
      ) {
        return changeShowFlashcardAnswer(!showFlashcardAnswer);
      }
    },
    [flashcards, selectedFlashcard, showFlashcardAnswer, isTextAreaFocused],
  );

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
          setIsTextAreaFocused={setIsTextAreaFocused}
        />
      )}
      <Box height="1em" />
      <Flex width="100%">
        <Flex margin="auto">
          {flashcards.map((flashcard, i) => {
            if (i === selectedFlashcard) {
              return (
                <Box margin="0 2px" key={i}>
                  <Circle
                    onClick={() => {
                      return;
                    }}
                    active={true}
                  />
                </Box>
              );
            }
            return (
              <Box margin="0 2px" key={i}>
                <Circle
                  onClick={() => {
                    changeSelectedFlashcard(i);
                  }}
                  active={false}
                />
              </Box>
            );
          })}
        </Flex>
      </Flex>
      <Box marginTop="1em">
        <Text>
          Press &nbsp;
          <Kbd border="1px solid #bbb" color="black">
            Left
          </Kbd>
          &nbsp; or &nbsp;
          <Kbd border="1px solid #bbb" color="black">
            Right
          </Kbd>
          &nbsp; to navigate among the flashcards. Press &nbsp;
          <Kbd border="1px solid #bbb" color="black">
            CMD
          </Kbd>
          &nbsp; + &nbsp;
          <Kbd border="1px solid #bbb" color="black">
            Enter
          </Kbd>
          &nbsp; to toggle the answer.
        </Text>
      </Box>
    </Box>
  );
};
