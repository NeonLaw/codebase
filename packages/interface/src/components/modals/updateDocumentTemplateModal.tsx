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
import {
  useDeleteDocumentTemplateByIdMutation,
  useUpdateDocumentTemplateByIdMutation,
} from '../../utils/api';
import { FlashButton } from '../button';
import { SubmissionInProgress } from '../submission-in-progress';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useOperatingSystem } from '../../utils/useOperatingSystem';

interface UpdateDocumentTemplateModalProps {
  isOpen: boolean;
  onClose(): void;
  currentRow: any;
}

const StyledModalFooter = styled(ModalFooter)`
  display: flex;
  flex-direction: column;

  & > * {
    &:not(:last-of-type) {
      margin-bottom: ${gutters.xSmallOne};
    }
  }
`;

export const UpdateDocumentTemplateModal = ({
  isOpen,
  onClose,
  currentRow,
}: UpdateDocumentTemplateModalProps) => {
  const intl = useIntl();
  const { id } = currentRow?.values || {};

  const [
    updateDocumentTemplate, { loading }
  ] = useUpdateDocumentTemplateByIdMutation();

  const [
    deleteDocumentTemplateMutation,
    { loading: deleteInProgress },
  ] = useDeleteDocumentTemplateByIdMutation({
    update(cache) {
      cache.modify({
        fields: {
          allDocumentTemplates(_, { DELETE }) {
            return DELETE;
          },
        },
      });
    },
  });

  const { control, handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [focus] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const OS = useOperatingSystem();

  const onSubmit = async ({
    name,
    readAuthorization,
    createAuthorization,
    updateAuthorization,
    deleteAuthorization
  }) => {
    await updateDocumentTemplate({
      variables: {
        createAuthorization,
        deleteAuthorization,
        description: '',
        id,
        name,
        readAuthorization,
        updateAuthorization,
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

  const handleDPress = async (e) => {
    if (isOpen && !focus && e.key === 'd') {
      await deleteDocumentTemplate();
    }
  };

  const deleteDocumentTemplate = async () => {
    const confirmDelete = confirm(
      'Are you sure you want to delete the question?',
    );

    if (confirmDelete) {
      await deleteDocumentTemplateMutation({ variables: { id } });
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
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay>
        <ModalContent
          data-testid="update-document-template-modal"
          margin="8em 2em 0 2em"
        >
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Update DocumentTemplate
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
                testId="update-document-template-form-name"
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
                testId="update-document-template-read-authorization"
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
                testId="update-document-template-update-authorization"
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
                testId="update-document-template-update-authorization"
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
                testId="update-document-template-delete-authorization"
                control={control}
              />
            </ModalBody>

            <StyledModalFooter>
              <FlashButton
                type="submit"
                data-testid="update-document-template-modal-submit"
                isDisabled={
                  isSubmitting || isDeleting || loading || deleteInProgress
                }
                containerStyles={{
                  margin: `${gutters.xSmallOne} 0`,
                  width: '100%',
                }}
                styles={{width: '100%'}}
                colorScheme="teal"
              >
                Update DocumentTemplate &nbsp;
                <Kbd border="1px solid #bbb" color="black">
                  Shift
                </Kbd>
                &nbsp;+ &nbsp;
                <Kbd border="1px solid #bbb" color="black">
                  Enter
                </Kbd>
                <SubmissionInProgress loading={loading} />
              </FlashButton>
              <FlashButton
                data-testid="update-document-template-modal-delete-button"
                isDisabled={
                  isSubmitting || isDeleting || loading || deleteInProgress
                }
                containerStyles={{width: '100%'}}
                styles={{width: '100%'}}
                onClick={async () => {
                  setIsDeleting(true);
                  await deleteDocumentTemplate();
                }}
                colorScheme="red"
              >
                Delete DocumentTemplate &nbsp;
                <Kbd border="1px solid #bbb" color="black">
                  D
                </Kbd>
                <SubmissionInProgress loading={deleteInProgress} />
              </FlashButton>
            </StyledModalFooter>
          </form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
