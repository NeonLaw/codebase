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
import { useCreateDocumentTemplateMutation } from '../../utils/api';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useKeyPressed } from '../../utils/useKeyPressed';
import { useOS } from '../../utils/useOS';

export const CreateDocumentTemplateModal = ({ isOpen, onClose, onOpen }) => {
  const intl = useIntl();

  const [
    createDocumentTemplate,
    { loading }
  ] = useCreateDocumentTemplateMutation();

  const { control, handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const OS = useOS();
  const isCPressed = useKeyPressed((e: KeyboardEvent) => e.key === 'c');

  const onSubmit = async ({
    name,
    readAuthorization,
    createAuthorization,
    updateAuthorization,
    deleteAuthorization
  }) => {
    await createDocumentTemplate({
      variables: {
        createAuthorization: createAuthorization.value,
        deleteAuthorization: deleteAuthorization.value,
        description: '',
        name,
        readAuthorization: readAuthorization.value,
        updateAuthorization: updateAuthorization.value,
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
          data-testid="create-document-template-form"
          margin="8em 2em 0 2em"
        >
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Create a Document Template
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
                name="name"
                testId="create-document-template-form-name"
                label={intl.formatMessage({ id: 'forms.name.label' })}
                errors={errors}
                placeholder={intl.formatMessage({
                  id: 'forms.name.placeholder',
                })}
                register={register({
                  required: intl.formatMessage({
                    id: 'forms.name.required',
                  }),
                })}
                styles={{ marginBottom: gutters.xSmall }}
              />
              <Select
                name="readAuthorization"
                label={intl.formatMessage(
                  { id: 'forms.read_authorization.label' }
                )}
                options={
                  [
                    { label: 'Public', value: 'anonymous' },
                    { label: 'Clients', value: 'portal' },
                    { label: 'Lawyers', value: 'lawyer' },
                    { label: 'Admin', value: 'admin' },
                  ]
                }
                errors={errors}
                testId="create-document-template-read-authorization"
                control={control}
              />
              <Select
                name="createAuthorization"
                label={intl.formatMessage(
                  { id: 'forms.create_authorization.label' }
                )}
                options={
                  [
                    { label: 'Public', value: 'anonymous' },
                    { label: 'Clients', value: 'portal' },
                    { label: 'Lawyers', value: 'lawyer' },
                    { label: 'Admin', value: 'admin' },
                  ]
                }
                errors={errors}
                testId="create-document-template-create-authorization"
                control={control}
              />
              <Select
                name="updateAuthorization"
                label={intl.formatMessage(
                  { id: 'forms.update_authorization.label' }
                )}
                options={
                  [
                    { label: 'Public', value: 'anonymous' },
                    { label: 'Clients', value: 'portal' },
                    { label: 'Lawyers', value: 'lawyer' },
                    { label: 'Admin', value: 'admin' },
                  ]
                }
                errors={errors}
                testId="create-document-template-update-authorization"
                control={control}
              />
              <Select
                name="deleteAuthorization"
                label={intl.formatMessage(
                  { id: 'forms.delete_authorization.label' }
                )}
                options={
                  [
                    { label: 'Public', value: 'anonymous' },
                    { label: 'Clients', value: 'portal' },
                    { label: 'Lawyers', value: 'lawyer' },
                    { label: 'Admin', value: 'admin' },
                  ]
                }
                errors={errors}
                testId="create-document-template-delete-authorization"
                control={control}
              />
            </ModalBody>

            <ModalFooter>
              <FlashButton
                type="submit"
                data-testid="create-document-template-form-submit"
                isDisabled={isSubmitting || loading}
                containerStyles={{width: '100%'}}
                styles={{width: '100%'}}
                colorScheme="teal"
              >
                Create DocumentTemplate &nbsp;
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
