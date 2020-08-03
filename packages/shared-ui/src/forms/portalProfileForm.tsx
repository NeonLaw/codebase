import React, { useState } from 'react';
import { Button } from '@chakra-ui/core';
import { StringInput } from '../forms/base';
import { useCurrentUserQuery } from '../utils/api';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useUpdatePersonByIdMutation } from '../utils/api';


export const PortalProfileForm = () => {
  const intl = useIntl();
  const { data } = useCurrentUserQuery();

  const [
    updatePersonById
  ] = useUpdatePersonByIdMutation();

  const {
    handleSubmit,
    errors,
    register,
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async ({ name }) => {
    const id = data?.getCurrentUser?.id;

    await updatePersonById(
      { variables: { id, name } }
    );

    await reset();

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit as any)}>
      <StringInput
        name="name"
        testId="portal-profile-form-name"
        label={intl.formatMessage({ id: 'forms.name.label' })}
        errors={errors}
        placeholder={intl.formatMessage({ id: 'forms.name.placeholder' })}
        register={
          register(
            { required: intl.formatMessage({ id: 'forms.name.required' }) }
          )
        }
      />
      <Button
        type="submit"
        data-testid="portal-profile-form-submit"
        isDisabled={isSubmitting}
      >
        Update Profile
      </Button>
    </form>
  );
};
