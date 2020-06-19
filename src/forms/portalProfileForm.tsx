import React, { useState } from 'react';
import { Button } from '@chakra-ui/core';
import { StringInput } from '@forms/base';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useUpdatePersonByIdMutation } from '@utils/api';


export const PortalProfileForm = () => {
  const intl = useIntl();

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

  const onSubmit = async ({ name, id }) => {
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
        label={intl.formatMessage({ id: 'forms.name.label' })}
        errors={errors}
        placeholder={intl.formatMessage({ id: 'forms.name.placeholder' })}
        register={
          register(
            { required: intl.formatMessage({ id: 'forms.name.required' }) }
          )
        }
      />
      <Button type="submit" isDisabled={isSubmitting}>
        Update Profile
      </Button>
    </form>
  );
};
