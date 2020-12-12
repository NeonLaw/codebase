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
import {
  useDeleteMatterTemplateByIdMutation,
  useUpdateMatterTemplateByIdMutation,
} from '../../utils/api';
import { FlashButton } from '../button';
import { StringInput } from '../inputs';
import { SubmissionInProgress } from '../submission-in-progress';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useOperatingSystem } from '../../utils/useOperatingSystem';

interface UpdateMatterTemplateModalProps {
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

export const UpdateMatterTemplateModal = ({
  isOpen,
  onClose,
  currentRow,
}: UpdateMatterTemplateModalProps) => {
  const intl = useIntl();
  const { id, name } = currentRow?.values || {};

  const [
    updateMatterTemplate,
    { loading }
  ] = useUpdateMatterTemplateByIdMutation();

  const [
    deleteMatterTemplateMutation,
    { loading: deleteInProgress },
  ] = useDeleteMatterTemplateByIdMutation({
    update(cache) {
      cache.modify({
        fields: {
          allMatterTemplates(_, { DELETE }) {
            return DELETE;
          },
        },
      });
    },
  });

  const { handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [focus, setFocus] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const OS = useOperatingSystem();

  const onSubmit = async ({ javascriptModule, name }) => {
    await updateMatterTemplate({
      variables: { id, javascriptModule, name },
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
      await deleteMatterTemplate();
    }
  };

  const deleteMatterTemplate = async () => {
    const confirmDelete = confirm(
      'Are you sure you want to delete the question?',
    );

    if (confirmDelete) {
      await deleteMatterTemplateMutation({ variables: { id } });
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
          data-testid="update-matter-template-modal"
          margin="8em 2em 0 2em"
        >
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Update MatterTemplate
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
                testId="update-matter-template-form-name"
                label={intl.formatMessage({ id: 'forms.name.label' })}
                errors={errors}
                onFocus={() => { setFocus(true); }}
                onBlur={() => { setFocus(false); }}
                value={name}
                placeholder={intl.formatMessage({
                  id: 'forms.name.placeholder',
                })}
                register={register({
                  required: intl.formatMessage({ id: 'forms.name.required' }),
                })}
                styles={{ marginBottom: gutters.xSmallOne }}
              />
              <StringInput
                name="javascriptModule"
                testId="update-matter-template-form-javascript-module"
                label={
                  intl.formatMessage({ id: 'forms.javascript_module.label' })
                }
                errors={errors}
                onFocus={() => { setFocus(true); }}
                onBlur={() => { setFocus(false); }}
                value={name}
                placeholder={intl.formatMessage({
                  id: 'forms.javascript_module.placeholder',
                })}
                register={register({
                  required: intl.formatMessage(
                    { id: 'forms.javascript_module.required' }
                  ),
                })}
                styles={{ marginBottom: gutters.xSmallOne }}
              />
            </ModalBody>

            <StyledModalFooter>
              <FlashButton
                type="submit"
                data-testid="update-matter-template-form-submit"
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
                Update MatterTemplate &nbsp;
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
                data-testid="update-matter-template-form-delete-button"
                isDisabled={
                  isSubmitting || isDeleting || loading || deleteInProgress
                }
                containerStyles={{width: '100%'}}
                styles={{width: '100%'}}
                onClick={async () => {
                  setIsDeleting(true);
                  await deleteMatterTemplate();
                }}
                colorScheme="red"
              >
                Delete MatterTemplate &nbsp;
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
