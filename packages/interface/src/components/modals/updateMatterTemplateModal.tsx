import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  theme,
  useColorMode,
} from '@chakra-ui/core';
import React, { useRef, useState } from 'react';
import {
  useDeleteMatterTemplateByIdMutation,
  useUpdateMatterTemplateByIdMutation,
} from '../../utils/api';
import { ModalFormBuilder } from '../modalFormBuilder';
import { colors } from '../../themes/neonLaw';
import { useIntl } from 'gatsby-plugin-intl';
import { useOperatingSystem } from '../../utils/useOperatingSystem';

interface UpdateMatterTemplateModalProps {
  isOpen: boolean;
  onClose(): void;
  currentRow: any;
}

export const UpdateMatterTemplateModal = ({
  isOpen,
  onClose,
  id,
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

  const { control, handleSubmit, errors, register, reset } = useForm();
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

  const deleteMatterTemplate = async () => {
    const confirmDelete = confirm(
      'Are you sure you want to delete the matter template?',
    );

    if (confirmDelete) {
      await deleteMatterTemplateMutation({ variables: { id } });
      setIsDeleting(false);
      onClose();
    }
  };

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
            Update Matter Template
          </ModalHeader>
          <ModalCloseButton style={{ color: colors.text[colorMode] }} />
          <ModalFormBuilder
            resourceName="matterTemplate"
            id={id}
            variables={
              [
                {
                  field: 'name',
                  type: 'string'
                },
                {
                  field: 'javascriptModule',
                  type: 'codeEditor'
                },
                {
                  field: 'category',
                  options: [
                    { label: 'Data Deletion', value: 'data-deletion' },
                    { label: 'Inmate Letter', value: 'inmate-letter' },
                    { label: 'Litigation', value: 'litigation' },
                    { label: 'Estate', value: 'estate' },
                    { label: 'Business', value: 'business' },
                  ],
                  type: 'select',
                }
              ]
            }
          />
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
