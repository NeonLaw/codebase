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
import { colors, gutters, theme } from '../themes/neonLaw';

import { FlashButton } from '../components/button';
import { StringInput } from '../components/inputs';
import { SubmissionInProgress } from '../components/submission-in-progress';
import { useCurrentUserQuery } from '../utils/api';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useUpdatePersonByIdMutation } from '../utils/api';

export const UpdateProfileModal = ({ isOpen, onClose }) => {
  const intl = useIntl();
  const { data } = useCurrentUserQuery();

  const [updatePersonById, { loading }] = useUpdatePersonByIdMutation();

  const { handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async ({ name }) => {
    const id = data?.getCurrentUser?.id;

    await updatePersonById({ variables: { id, name } });

    await reset();

    setIsSubmitting(false);
    onClose();
  };

  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay>
        <ModalContent data-testid="update-profile-modal" margin="8em 2em 0 2em">
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Update Profile
          </ModalHeader>
          <ModalCloseButton style={{ color: colors.text[colorMode] }} />

          <form
            onSubmit={handleSubmit(onSubmit as any)}
            style={{ color: colors.text[colorMode] }}
          >
            <ModalBody>
              <StringInput
                name="name"
                testId="portal-profile-form-name"
                label={intl.formatMessage({ id: 'forms.name.label' })}
                errors={errors}
                placeholder={intl.formatMessage({
                  id: 'forms.name.placeholder',
                })}
                register={register({
                  required: intl.formatMessage({ id: 'forms.name.required' }),
                })}
              />
              <FlashButton
                type="submit"
                data-testid="portal-profile-form-submit"
                isDisabled={isSubmitting || loading}
                containerStyles={{ margin: `${gutters.xSmallOne} 0` }}
              >
                Update Profile <SubmissionInProgress loading={loading} />
              </FlashButton>
            </ModalBody>
          </form>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
