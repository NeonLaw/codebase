import {
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
import { StringInput, Textarea } from '../inputs';
import { colors, gutters } from '../../themes/neonLaw';
import { submitOnMetaEnter, submitOnShiftEnter } from '../../utils/keyboard';

import { FlashButton } from '../button';
import { SubmissionInProgress } from '../submission-in-progress';
import { gql } from '@apollo/client';
import { useUpdateQuestionMutation } from '../../utils/api';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useKeyPressed } from '../../utils/useKeyPressed';
import { useOS } from '../../utils/useOS';

export const UpdateQuestionModal = ({ isOpen, onClose, onOpen }) => {
  const intl = useIntl();

  const [updateQuestion, { loading }] = useUpdateQuestionMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          allQuestions(existingFlashCards = []) {
            const newFlashCardRef = cache.writeFragment({
              data: data?.updateQuestion,
              fragment: gql`
                fragment NewQuestion on Question {
                  question {
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

  const { control, handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const OS = useOS();
  const isCPressed = useKeyPressed((e: KeyboardEvent) => e.key === 'c');

  const onSubmit = async ({ options, prompt, questionType }) => {
    await updateQuestion({ variables: { options, prompt, questionType } })
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
    if (OS === 'Mac OS') {
      submitOnMetaEnter(e, formRef);
    } else {
      submitOnShiftEnter(e, formRef);
    }
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
          data-testid="update-question-modal"
          margin="8em 2em 0 2em"
        >
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Update a Question
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
                testId="update-question-modal-prompt"
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
                control={control}
                name="answer"
                testId="update-question-modal-answer"
                label={intl.formatMessage({ id: 'forms.answer.label' })}
                errors={errors}
                placeholder={intl.formatMessage({
                  id: 'forms.answer.placeholder',
                })}
              />
            </ModalBody>

            <ModalFooter>
              <FlashButton
                type="submit"
                data-testid="update-question-modal-submit"
                isDisabled={isSubmitting || loading}
                containerStyles={{width: '100%'}}
                styles={{width: '100%'}}
                colorScheme="teal"
              >
                Update Question &nbsp;
                <Kbd border="1px solid #bbb" color="black">
                  Shift
                </Kbd>
                &nbsp;+ &nbsp;
                <Kbd border="1px solid #bbb" color="black">
                  Enter
                </Kbd>
                <SubmissionInProgress loading={loading} />
              </FlashButton>
            </ModalFooter>
          </form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
