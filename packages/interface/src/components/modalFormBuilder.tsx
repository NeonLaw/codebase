import { ModalBody, ModalFooter } from '@chakra-ui/core';
import React, { useEffect } from 'react';
import { submitOnMetaEnter, submitOnShiftEnter } from '../utils/keyboard';
import { default as styled } from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';
import { kebabCase } from 'voca'

interface FormBuilderProps {
  id?: string;
  variables: any;
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

export const ModalFormBuilder = ({
  id,
  resourceName,
  variables,
}: FormBuilderProps) => {
  const dasherizedResourceName = kebabCase(resourceName);

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

  const handleDPress = async (e) => {
    if (id && isOpen && !focus && e.key === 'd') {
      await deleteMatterTemplate();
    }
  };

  const intl = useIntl();

  return (
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
        <Select
          name="readAuthorization"
          label={intl.formatMessage(
            { id: 'forms.read_authorization.label' }
          )}
          options={
            [
              { label: 'Data Deletion', value: 'data-deletion' },
              { label: 'Inmate Letter', value: 'inmate-letter' },
              { label: 'Litigation', value: 'litigation' },
              { label: 'Estate', value: 'estate' },
              { label: 'Business', value: 'business' },
            ]
          }
          errors={errors}
          testId="update-document-template-read-authorization"
          control={control}
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
  );
};
