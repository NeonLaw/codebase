import { Dashboard, useUppy } from '@uppy/react';
import {
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
import React, { useRef, useState } from 'react';
import { CreateButton } from '../buttons/createButton';
import Transloadit from '@uppy/transloadit';
import Uppy from '@uppy/core';
import { colors } from '../../themes/neonLaw';
import { useCreateMatterDocumentFromUploadUrlMutation } from '../../utils/api';
import { useForm } from 'react-hook-form';

export const CreateMatterDocumentModal = ({ isOpen, onClose, matterId }) => {
  const { colorMode } = useColorMode();
  const { handleSubmit, register, reset, setValue } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const uppy = useUppy(() => {
    const uppy = Uppy({
      allowMultipleUploads: false,
      id: 'create-matter-document',
      restrictions: {
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
      },
    });

    uppy.use(Transloadit, {
      params: JSON.stringify({
        auth: {
          key: process.env.TRANSLOADIT_KEY,
        },
        template_id: process.env.TRANSLOADIT_TEMPLATE_ID
      }),
      waitForEncoding: true
    });

    uppy.on('error', (error) => {
      console.error(JSON.stringify(error));
    });

    uppy.on('transloadit:result', (_, result) => {
      setValue('uploadDocumentUrl', result.url, {
        shouldValidate: true
      });
    });

    return uppy;
  });

  const [
    createMutation,
    { loading },
  ] = useCreateMatterDocumentFromUploadUrlMutation();

  const onSubmit = async (variables) => {
    console.log(variables);
    await createMutation({
      variables,
    })
      .then(async () => {
        setFormError('');
        await reset();
        setIsSubmitting(false);
        onClose();
      })
      .catch((apiErrors) => {
        setFormError(apiErrors.message);
        setIsSubmitting(false);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent
        data-testid={'create-matter-document-form'}
        margin="8em 2em 0 2em"
      >
        <ModalHeader
          fontWeight="normal"
          fontSize={theme.fontSizes['xl0']}
          color={colors.text[colorMode]}
        >
            Create Matter Document
        </ModalHeader>
        <ModalCloseButton style={{ color: colors.text[colorMode] }} />
        <form
          onSubmit={handleSubmit(onSubmit as any)}
          style={{ color: colors.text[colorMode] }}
          ref={formRef}
        >
          <ModalBody>
            <>{formError}</>
            <input
              name='matterId'
              type="hidden"
              value={matterId}
              ref={register}
            />
            <input
              name='uploadDocumentUrl'
              type="hidden"
              ref={register}
            />
            <Dashboard uppy={uppy} />
          </ModalBody>
          <ModalFooter>
            <CreateButton
              dasherizedResourceName='matter-document'
              titlecaseResourceName="Matter Document"
              isSubmitting={isSubmitting}
              createMutationLoading={loading}
            />
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};
