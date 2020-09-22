import {
  Button,
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
import { Select, StringInput, Textarea } from '../../forms/base';

import { colors } from '../../themes/neonLaw';
import { flashcardTopics } from '../../forms/options/flashcardTopics';
import { gql } from '@apollo/client';
import { submitOnShiftEnter } from '../../utils/keyboard';
import { useCreateFlashcardMutation } from '../../utils/api';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';

export const CreateFlashcardModal = ({ isOpen, onClose, onOpen }) => {
  const intl = useIntl();

  const [createFlashcard] = useCreateFlashcardMutation({
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
                    topic
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

  const { control, handleSubmit, errors, register, reset } = useForm({
    defaultValues: {
      topic: flashcardTopics[0],
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async ({ answer, prompt, topic }) => {
    const topicValue = topic.value;
    await createFlashcard({ variables: { answer, prompt, topic: topicValue } })
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

  const handleCPress = (e) => {
    if (e.key === 'c') {
      onOpen();
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleCPress);

    const textArea = document.querySelector('.answer-text');

    if (null !== textArea) {
      textArea.addEventListener('keydown', keyDownHandler);
    }

    return () => {
      window.removeEventListener('keypress', handleCPress);

      if (null !== textArea) {
        textArea.removeEventListener('keydown', keyDownHandler);
      }
    };
  });

  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay>
        <ModalContent data-testid="create-flashcard-modal" marginTop="8em">
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
              />
              <Textarea
                className="answer-text"
                name="answer"
                testId="create-flashcard-modal-answer"
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
              <Select
                name="topic"
                testId="create-flashcard-modal-topic"
                control={control}
                errors={errors}
                options={flashcardTopics}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                data-testid="create-flashcard-modal-submit"
                isDisabled={isSubmitting}
                width="100%"
              >
                Create Flashcard
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
