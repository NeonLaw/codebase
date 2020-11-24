import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useColorMode,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import { StringInput, Switch } from '../components/inputs';
import { colors, gutters, theme } from '../themes/neonLaw';
import { FlashButton } from '../components/button';
import { SubmissionInProgress } from '../components/submission-in-progress';
import { useCurrentUserQuery } from '../utils/api';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useUpdatePersonByIdMutation } from '../utils/api';

export const UpdatePersonModal = ({ isOpen, onClose }) => {
  const intl = useIntl();
  const { data } = useCurrentUserQuery();

  const [updatePersonById, { loading }] = useUpdatePersonByIdMutation();

  const { handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async ({ accessibleButtons, name }) => {
    const id = data?.getCurrentUser?.id;
    const flags = accessibleButtons ? 'ACCESSIBLE_BUTTONS' : '';

    await updatePersonById({ variables: { flags, id, name } });

    await reset();

    setIsSubmitting(false);
    onClose();
  };

  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay>
        <ModalContent data-testid="update-person-modal" margin="8em 2em 0 2em">
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Update Person
          </ModalHeader>
          <ModalCloseButton style={{ color: colors.text[colorMode] }} />

          <form
            onSubmit={handleSubmit(onSubmit as any)}
            style={{ color: colors.text[colorMode] }}
          >
            <ModalBody>
              <StringInput
                name="name"
                testId="update-person-form-name"
                label={intl.formatMessage({ id: 'forms.name.label' })}
                errors={errors}
                placeholder={intl.formatMessage({
                  id: 'forms.name.placeholder',
                })}
                register={register({
                  required: intl.formatMessage({ id: 'forms.name.required' }),
                })}
              />
              <Switch
                name="accessibleButtons"
                testId="update-person-form-accessible-buttons"
                label={
                  intl.formatMessage({ id: 'forms.accessibleButtons.label' })
                }
                errors={errors}
                register={register()}
              />
              <FlashButton
                type="submit"
                data-testid="update-person-form-submit"
                isDisabled={isSubmitting || loading}
                containerStyles={{ margin: `${gutters.xSmallOne} 0` }}
              >
                Update Person <SubmissionInProgress loading={loading} />
              </FlashButton>
            </ModalBody>
          </form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
