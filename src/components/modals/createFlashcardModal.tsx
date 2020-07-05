import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import { Select, StringInput, Textarea } from '@forms/base';
import { flashcardTopics } from '@forms/options/flashcardTopics';
import { useCreateFlashcardMutation } from '@utils/api';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';

export const CreateFlashcardModal = ({ isOpen, onClose }) => {
  const intl = useIntl();
  const [
    createFlashcard
  ] = useCreateFlashcardMutation();

  const {
    control,
    handleSubmit,
    errors,
    register,
    reset,
  } = useForm({
    defaultValues: {
      topic: flashcardTopics[0],
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const onSubmit = async ({ answer, prompt, topic }) => {
    const topicValue = topic.value;
    await createFlashcard(
      { variables: { answer, prompt, topic: topicValue } }
    ).then(async () => {
      setFormError('');
      await reset();
      onClose();

      setIsSubmitting(false);
    }).catch((apiErrors) => {
      console.log(apiErrors.graphQLErrors);
      setFormError(apiErrors.message);
      setIsSubmitting(false);
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Text>
        </Text>
        <ModalHeader>Create a Flashcard</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit as any)}>
          <ModalBody>
            {formError}
            <StringInput
              name="prompt"
              testId="create-flashcard-modal-prompt"
              label={intl.formatMessage({ id: 'forms.prompt.label' })}
              errors={errors}
              placeholder={intl.formatMessage(
                { id: 'forms.prompt.placeholder' }
              )}
              register={
                register({
                  required: intl.formatMessage({ id: 'forms.prompt.required' })
                })
              }
            />
            <Textarea
              name="answer"
              testId="create-flashcard-modal-answer"
              label={intl.formatMessage({ id: 'forms.answer.label' })}
              errors={errors}
              placeholder={intl.formatMessage(
                { id: 'forms.answer.placeholder' }
              )}
              register={
                register({
                  required: intl.formatMessage({ id: 'forms.answer.required' })
                })
              }
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
            >
              Create Flashcard
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
