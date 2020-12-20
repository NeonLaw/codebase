import { ModalBody, ModalFooter, Kbd, useColorMode } from '@chakra-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import { submitOnMetaEnter, submitOnShiftEnter } from '../../utils/keyboard';
import { colors, gutters } from '../../themes/neonLaw';
import { default as styled } from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';
import { useOperatingSystem } from '../../utils/useOperatingSystem';
import { kebabCase, snakeCase } from 'voca';
import { Select, StringInput } from '../inputs';
import { FlashButton } from '../button';
import { useForm } from 'react-hook-form';
import { CreateButton } from '../buttons/createButton';

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
  id?: string;
  fields: Field[];
  resourceName: string;
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

/*
 * @param {uuid} id - The existing ID of the record if it exists. If this
 * parameter is passed in, then the form will be an update/delete form. If this
 * parameter is not passed in, then the form will be a create form.
 */
export const ModalFormBuilder = ({
  id,
  resourceName,
  fields,
}: FormBuilderProps) => {
  const dasherizedResourceName = kebabCase(resourceName);
  const underscoreName = snakeCase(resourceName);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const pascalCaseName = capitalize(resourceName);

  const intl = useIntl();
  const { colorMode } = useColorMode();
  const { control, handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focus, setFocus] = useState(false);
  const [formError, setFormError] = useState('');
  const OS = useOperatingSystem();

  const formRef = useRef<HTMLFormElement>(null);

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

  const keyDownHandler = (e: any) => {
    if (OS === 'Mac OS') {
      submitOnMetaEnter(e, formRef);
    } else {
      submitOnShiftEnter(e, formRef);
    }
  };

  const [updateMutation, { loading: updateInProgress }] = require('')('');

  const handleDPress = async (e) => {
    if (id && isOpen && !focus && e.key === 'd') {
      await deleteMutation();
    }
  };

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

  const currentModel = id;

  return (
    <form
      onSubmit={handleSubmit(onSubmit as any)}
      style={{ color: colors.text[colorMode] }}
      ref={formRef}
    >
      <ModalBody>
        {formError}
        {fields.map((field, i) => {
          switch (field.type) {
            case 'string':
              return (
                <StringInput
                  name="name"
                  testId="update-matter-template-form-name"
                  label={intl.formatMessage({ id: 'forms.name.label' })}
                  errors={errors}
                  onFocus={() => {
                    setFocus(true);
                  }}
                  onBlur={() => {
                    setFocus(false);
                  }}
                  value={currentModel && currentModel[field.name]}
                  placeholder={intl.formatMessage({
                    id: 'forms.name.placeholder',
                  })}
                  register={register({
                    required: intl.formatMessage({ id: 'forms.name.required' }),
                  })}
                  styles={{ marginBottom: gutters.xSmallOne }}
                />
              );
            case 'select':
              return (
                <Select
                  name="readAuthorization"
                  label={intl.formatMessage({
                    id: 'forms.read_authorization.label',
                  })}
                  options={[
                    { label: 'Data Deletion', value: 'data-deletion' },
                    { label: 'Inmate Letter', value: 'inmate-letter' },
                    { label: 'Litigation', value: 'litigation' },
                    { label: 'Estate', value: 'estate' },
                    { label: 'Business', value: 'business' },
                  ]}
                  errors={errors}
                  testId="update-document-template-read-authorization"
                  control={control}
                />
              );
          }
        })}
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
