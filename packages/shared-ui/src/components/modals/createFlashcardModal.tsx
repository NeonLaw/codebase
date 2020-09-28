import {
  Button,
  Kbd,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  theme,
  useColorMode,
} from '@chakra-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { StringInput, Textarea } from '../../forms/base';
import { colors, gutters } from '../../themes/neonLaw';

import { SubmissionInProgress } from '../submission-in-progress';
import { gql } from '@apollo/client';
import { submitOnShiftEnter } from '../../utils/keyboard';
import { useCreateFlashcardMutation } from '../../utils/api';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useKeyPressed } from '../../utils/useKeyPressed';

export const CreateFlashcardModal = ({ isOpen, onClose, onOpen }) => {
  const intl = useIntl();

  const [createFlashcard, { loading }] = useCreateFlashcardMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          allFlashcards(existingFlashCards = []) {
            const newFlashCardRef = cache.writeFragment({
              data: data?.createFlashcard,
              fragment: gql`
                fragment NewFlashcard on Flashcard {
                  flashcard {
                    id
                    answer
                    prompt
                  }
                }
              `,
            });
            return [...existingFlashCards.nodes, newFlashCardRef];
          },
        },
      });
    },
  });

  const { handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const isCPressed = useKeyPressed((e: KeyboardEvent) => e.key === 'c');

  const onSubmit = async ({ answer, prompt }) => {
    await createFlashcard({ variables: { answer, prompt } })
      .then(async () => {
        setFormError('');
        await reset();
        onClose();

        setIsSubmitting(false);
      })
      .catch((apiErrors) => {
        console.log(apiErrors.graphQLErrors);
        setFormError(apiErrors.message);
        setIsSubmitting(false);
      });
  };

  const keyDownHandler = (e: any) => {
    submitOnShiftEnter(e, formRef);
  };

  useEffect(() => {
    if (isCPressed) {
      onOpen();
    }

    const textArea = document.querySelector('.answer-text');

    if (null !== textArea) {
      textArea.addEventListener('keydown', keyDownHandler);
    }

    return () => {
      if (null !== textArea) {
        textArea.removeEventListener('keydown', keyDownHandler);
      }
    };
  });

  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay>
        <ModalContent
          data-testid="create-flashcard-modal"
          margin="8em 2em 0 2em"
        >
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Create a Flashcard
          </ModalHeader>
          <ModalCloseButton style={{ color: colors.text[colorMode] }} />
          <form
            onSubmit={handleSubmit(onSubmit as any)}
            style={{ color: colors.text[colorMode] }}
            ref={formRef}
          >
            <ModalBody>
              {formError}
              <StringInput
                name="prompt"
                testId="create-flashcard-modal-prompt"
                label={intl.formatMessage({ id: 'forms.prompt.label' })}
                errors={errors}
                placeholder={intl.formatMessage({
                  id: 'forms.prompt.placeholder',
                })}
                register={register({
                  required: intl.formatMessage({
                    id: 'forms.prompt.required',
                  }),
                })}
                styles={{ marginBottom: gutters.xSmall }}
              />
              <Textarea
                className="answer-text"
                name="answer"
                testId="create-flashcard-modal-answer"
                size="xl"
                label={intl.formatMessage({ id: 'forms.answer.label' })}
                errors={errors}
                placeholder={intl.formatMessage({
                  id: 'forms.answer.placeholder',
                })}
                register={register({
                  required: intl.formatMessage({
                    id: 'forms.answer.required',
                  }),
                })}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                data-testid="create-flashcard-modal-submit"
                isDisabled={isSubmitting || loading}
                width="100%"
                colorScheme="teal"
              >
                Create Flashcard &nbsp;
                <Kbd border="1px solid #bbb" color="black">
                  Shift
                </Kbd>
                &nbsp;+ &nbsp;
                <Kbd border="1px solid #bbb" color="black">
                  Enter
                </Kbd>
                <SubmissionInProgress loading={loading} />
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
