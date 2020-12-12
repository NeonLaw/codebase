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
import { Select, StringInput } from '../inputs';
import { colors, gutters } from '../../themes/neonLaw';
import { submitOnMetaEnter, submitOnShiftEnter } from '../../utils/keyboard';

import { FlashButton } from '../button';
import { SubmissionInProgress } from '../submission-in-progress';
import { useCreateQuestionMutation } from '../../utils/api';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useKeyPressed } from '../../utils/useKeyPressed';
import { useOperatingSystem } from '../../utils/useOperatingSystem';

export const CreateQuestionModal = ({ isOpen, onClose, onOpen }) => {
  const intl = useIntl();

  const [createQuestion, { loading }] = useCreateQuestionMutation();

  const { control, handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const OS = useOperatingSystem();
  const isCPressed = useKeyPressed((e: KeyboardEvent) => e.key === 'c');

  const onSubmit = async ({ options, prompt, questionType }) => {
    await createQuestion({
      variables: {
        options,
        prompt,
        questionType: questionType.value
      }
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
          data-testid="create-question-modal"
          margin="8em 2em 0 2em"
        >
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Create a Question
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
                testId="create-question-form-prompt"
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
              <Select
                name="questionType"
                label={intl.formatMessage({ id: 'forms.questionType.label' })}
                options={
                  [
                    { label: 'Single Choice', value: 'single-choice' },
                    { label: 'Single Date', value: 'single-date' },
                    {
                      label: 'Single File Upload',
                      value: 'single-file-upload'
                    },
                  ]
                }
                errors={errors}
                testId="create-question-form-question-type"
                control={control}
              />
            </ModalBody>

            <ModalFooter>
              <FlashButton
                type="submit"
                data-testid="create-question-form-submit"
                isDisabled={isSubmitting || loading}
                containerStyles={{width: '100%'}}
                styles={{width: '100%'}}
                colorScheme="teal"
              >
                Create Question &nbsp;
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
