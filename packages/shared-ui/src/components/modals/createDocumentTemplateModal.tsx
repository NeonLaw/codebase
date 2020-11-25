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
import { colors, gutters } from '../../themes/neonLaw';
import { submitOnMetaEnter, submitOnShiftEnter } from '../../utils/keyboard';
import { FlashButton } from '../button';
import { StringInput } from '../inputs';
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

  const { handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const OS = useOS();
  const isCPressed = useKeyPressed((e: KeyboardEvent) => e.key === 'c');

  const onSubmit = async ({ name, javascriptModule }) => {
    await createDocumentTemplate({
      variables: {
        javascriptModule,
        name,
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
            Create a DocumentTemplate
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
              <StringInput
                name="javascriptModule"
                testId="create-document-template-form-javascript-module"
                label={
                  intl.formatMessage({ id: 'forms.javascriptModule.label' })
                }
                errors={errors}
                placeholder={intl.formatMessage({
                  id: 'forms.javascriptModule.placeholder',
                })}
                register={register({
                  required: intl.formatMessage({
                    id: 'forms.javascriptModule.required',
                  }),
                })}
                styles={{ marginBottom: gutters.xSmall }}
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
