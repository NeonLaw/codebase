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
import {
  useDeleteFlashcardByIdMutation,
  useUpdateFlashcardByIdMutation,
} from '../../utils/api';

import { SubmissionInProgress } from '../submission-in-progress';
import { colors } from '../../themes/neonLaw';
import { submitOnShiftEnter } from '../../utils/keyboard';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';

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

  const [updateFlashcard, { loading }] = useUpdateFlashcardByIdMutation();

  const [
    deleteFlashcardMutation,
    { loading: deleteInProgress },
  ] = useDeleteFlashcardByIdMutation({
    update(cache) {
      cache.modify({
        fields: {
          allFlashcards(_, { DELETE }) {
            return DELETE;
          },
        },
      });
    },
  });

  const { control, handleSubmit, errors, register, reset } = useForm({
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [focus, setFocus] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async ({ answer, prompt }) => {
    await updateFlashcard({
      variables: { answer, id, prompt },
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

  const handleDPress = async (e) => {
    if (isOpen && !focus && e.key === 'd') {
      await deleteFlashcard();
    }
  };

  const deleteFlashcard = async () => {
    const confirmDelete = confirm(
      'Are you sure you want to delete the flashcard?'
    );

    if (confirmDelete) {
      await deleteFlashcardMutation({ variables: { id } });
      setIsDeleting(false);
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keypress', handleDPress);

    const textArea = document.querySelector('.answer');

    if (null !== textArea) {
      textArea.addEventListener('keydown', keyDownHandler);
    }
    return () => {
      window.removeEventListener('keypress', handleDPress);

      if (null !== textArea) {
        textArea.removeEventListener('keydown', keyDownHandler);
      }
    };
  });

  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay>
        <ModalContent
          data-testid="update-flashcard-modal"
          margin="8em 2em 0 2em"
        >
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
                onFocus={() => {
                  setFocus(true);
                }}
                onBlur={() => {
                  setFocus(false);
                }}
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
                size="xl"
                testId="update-flashcard-modal-answer"
                onFocus={() => {
                  setFocus(true);
                }}
                onBlur={() => {
                  setFocus(false);
                }}
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
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                data-testid="update-flashcard-modal-submit"
                isDisabled={
                  isSubmitting || isDeleting || loading || deleteInProgress
                }
                width="100%"
                margin="0 1em"
                colorScheme="teal"
              >
                Update Flashcard &nbsp;
                <Kbd border="1px solid #bbb" color="black">
                  Shift
                </Kbd>
                &nbsp;+ &nbsp;
                <Kbd border="1px solid #bbb" color="black">
                  Enter
                </Kbd>
                <SubmissionInProgress loading={loading} />
              </Button>
              <Button
                data-testid="update-flashcard-modal-delete-button"
                isDisabled={
                  isSubmitting || isDeleting || loading || deleteInProgress
                }
                margin="0 1em"
                onClick={async () => {
                  setIsDeleting(true);
                  await deleteFlashcard();
                }}
                width="100%"
                colorScheme="red"
              >
                Delete Flashcard &nbsp;
                <Kbd border="1px solid #bbb" color="black">
                  D
                </Kbd>
                <SubmissionInProgress loading={deleteInProgress} />
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
