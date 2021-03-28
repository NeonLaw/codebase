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
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { CreateButton } from '../buttons/createButton';
import { InputBuilder } from '../forms/inputBuilder';
import Transloadit from '@uppy/transloadit';
import Uppy from '@uppy/core';
import { colors } from '../../styles/neonLaw';
import {
  unprocessedMatterDocumentFields
} from '../fields/unprocessedMatterDocumentFields';
import { useCreateUnprocessedMatterDocumentMutation } from '../../utils/api';
import { useForm } from 'react-hook-form';

export const CreateUnprocessedMatterDocumentModal = ({
  isOpen,
  onClose,
  matterId
}) => {
  const { colorMode } = useColorMode();
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    errors,
    control
  } = useForm();
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
      params: {
        auth: {
          key: process.env.NEXT_PUBLIC_TRANSLOADIT_KEY,
        },
        template_id: process.env.NEXT_PUBLIC_TRANSLOADIT_TEMPLATE_ID
      },
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
  ] = useCreateUnprocessedMatterDocumentMutation();

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
            <InputBuilder
              resourceName="unprocessedMatterDocument"
              fields={unprocessedMatterDocumentFields}
              control={control}
              errors={errors}
              register={register}
              currentValues={{}}
            />
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
