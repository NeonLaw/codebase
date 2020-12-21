import { ModalBody, ModalFooter, useColorMode } from '@chakra-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { colors, gutters } from '../../themes/neonLaw';
import { kebabCase, titleCase } from 'voca';
import { submitOnMetaEnter, submitOnShiftEnter } from '../../utils/keyboard';
import { CreateButton } from '../buttons/createButton';
import { InputBuilder } from './inputBuilder';
import { default as styled } from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { useOperatingSystem } from '../../utils/useOperatingSystem';

interface Option {
  label: string;
  value: string;
}
interface Field {
  name: string;
  type: 'string' | 'codeEditor' | 'select';
  options?: Option[];
}

interface FormBuilderProps {
  fields: Field[];
  resourceName: string;
  onClose(): void;
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

export const CreateModalFormBuilder = ({
  resourceName,
  fields,
  onClose,
}: FormBuilderProps) => {
  const dasherizedResourceName = kebabCase(resourceName);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const pascalCaseName = capitalize(resourceName);
  const titlecaseResourceName = titleCase(resourceName);

  const { colorMode } = useColorMode();
  const { control, handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const OS = useOperatingSystem();

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const input = document.querySelector('input');

    if (null !== input) {
      input.addEventListener('keydown', keyDownHandler);
    }

    return () => {
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
    createMutation,
    { loading: createMutationLoading },
  ] = require('../../utils/api')(`useCreate${pascalCaseName}Mutation`);

  const onSubmit = async (variables) => {
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
          currentValues={{}}
        />
      </ModalBody>

      <StyledModalFooter>
        <CreateButton
          dasherizedResourceName={dasherizedResourceName}
          titlecaseResourceName={titlecaseResourceName}
          isSubmitting={isSubmitting}
          createMutationLoading={createMutationLoading}
        />
      </StyledModalFooter>
    </form>
  );
};
