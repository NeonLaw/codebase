import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  theme,
  useColorMode
} from '@chakra-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { colors, gutters } from '../../themes/neonLaw';
import { kebabCase, titleCase } from 'voca';
import { submitOnMetaEnter, submitOnShiftEnter } from '../../utils/keyboard';
import { DeleteButton } from '../buttons/deleteButton';
import { Field } from './inputTypes';
import { InputBuilder } from './inputBuilder';
import { UpdateButton } from '../buttons/updateButton';
import { default as styled } from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { useOperatingSystem } from '../../utils/useOperatingSystem';

interface FormBuilderProps {
  fields: Field[];
  resourceName: string;
  onClose(): void;
  currentValues: any;
  isOpen: boolean;
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

export const UpdateModalFormBuilder = ({
  resourceName,
  fields,
  onClose,
  currentValues,
  isOpen,
}: FormBuilderProps) => {
  const dasherizedResourceName = kebabCase(resourceName);
  const titlecaseResourceName = titleCase(resourceName);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const pascalCaseName = capitalize(resourceName);

  const { colorMode } = useColorMode();
  const { control, handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const OS = useOperatingSystem();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    window.addEventListener('keypress', handleDPress);

    const input = document.querySelector('input');

    if (null !== input) {
      input.addEventListener('keydown', keyDownHandler);
    }
    return () => {
      window.removeEventListener('keypress', handleDPress);

      if (null !== input) {
        input.removeEventListener('keydown', keyDownHandler);
      }
    };
  });

  const keyDownHandler = (e: any) => {
    if (OS === 'Mac OS') {
      submitOnMetaEnter(e, formRef);
    } else {
      submitOnShiftEnter(e, formRef);
    }
  };

  const [
    updateMutation,
    { loading: updateMutationLoading },
  ] = require('../../utils/api')[`useUpdate${pascalCaseName}ByIdMutation`]();
  const [
    deleteMutation,
    { loading: deleteMutationLoading },
  ] = require('../../utils/api')[`useDelete${pascalCaseName}ByIdMutation`]();

  const handleDPress = async (e) => {
    if (e.key === 'd') {
      await deleteMutation();
    }
  };

  const onSubmit = async (variables) => {
    await updateMutation({
      variables,
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

  const deleteHandler = async () => {
    await deleteMutation({
      variables: { id: currentValues.id }
    })
      .then(async () => {
        await reset();
        onClose();
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay>
        <ModalContent
          data-testid={`update-${dasherizedResourceName}-form`}
          margin="8em 2em 0 2em"
        >
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Update {titlecaseResourceName}
          </ModalHeader>
          <ModalCloseButton style={{ color: colors.text[colorMode] }} />
          <form
            onSubmit={handleSubmit(onSubmit as any)}
            style={{ color: colors.text[colorMode] }}
            ref={formRef}
          >
            <ModalBody>
              {formError}
              <InputBuilder
                resourceName={resourceName}
                fields={fields}
                control={control}
                errors={errors}
                register={register}
                currentValues={currentValues}
              />
            </ModalBody>

            <StyledModalFooter>
              <UpdateButton
                dasherizedResourceName={dasherizedResourceName}
                titlecaseResourceName={titlecaseResourceName}
                isSubmitting={isSubmitting}
                updateMutationLoading={updateMutationLoading}
                deleteMutationLoading={deleteMutationLoading}
              />
              <DeleteButton
                dasherizedResourceName={dasherizedResourceName}
                titlecaseResourceName={titlecaseResourceName}
                isSubmitting={isSubmitting}
                updateMutationLoading={updateMutationLoading}
                deleteHandler={deleteHandler}
                deleteMutationLoading={deleteMutationLoading}
              />
            </StyledModalFooter>
          </form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
