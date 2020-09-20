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
import { submitOnShiftEnter } from '../../utils/keyboard';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useUpdateFlashcardByIdMutation } from '../../utils/api';

interface UpdateFlashcardModalProps {
  isOpen: boolean;
  onClose(): void;
  currentRow: any;
}

export const UpdateFlashcardModal = ({
  isOpen,
  onClose,
  currentRow,
}: UpdateFlashcardModalProps) => {
  const intl = useIntl();
  const { answer, id, prompt } = currentRow?.values || {};

  const [updateFlashcard] = useUpdateFlashcardByIdMutation();

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
    await updateFlashcard({
      variables: { answer, id, prompt, topic: topicValue },
    })
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
    const textArea = document.querySelector('.answer');

    if (null !== textArea) {
      textArea.addEventListener('keydown', keyDownHandler);
      return () => {
        textArea.removeEventListener('keydown', keyDownHandler);
      };
    }
  });

  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay>
        <ModalContent data-testid="update-flashcard-modal" marginTop="8em">
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Update Flashcard
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
                testId="update-flashcard-modal-prompt"
                label={intl.formatMessage({ id: 'forms.prompt.label' })}
                errors={errors}
                value={prompt}
                placeholder={intl.formatMessage({
                  id: 'forms.prompt.placeholder',
                })}
                register={register({
                  required: intl.formatMessage({ id: 'forms.prompt.required' }),
                })}
              />
              <Textarea
                name="answer"
                className="answer"
                testId="update-flashcard-modal-answer"
                label={intl.formatMessage({ id: 'forms.answer.label' })}
                errors={errors}
                value={answer}
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
                testId="update-flashcard-modal-topic"
                control={control}
                errors={errors}
                options={flashcardTopics}
              />
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                data-testid="update-flashcard-modal-submit"
                isDisabled={isSubmitting}
                width="100%"
              >
                Update Flashcard
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
