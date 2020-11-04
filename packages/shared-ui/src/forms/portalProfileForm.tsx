import React, { useState } from 'react';

import { FlashButton } from '../components/button';
import { StringInput } from '../components/inputs';
import { SubmissionInProgress } from '../components/submission-in-progress';
import { gutters } from '../themes/neonLaw';
import { useCurrentUserQuery } from '../utils/api';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useUpdatePersonByIdMutation } from '../utils/api';

export const PortalProfileForm = () => {
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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit as any)}>
      <StringInput
        name="name"
        testId="portal-profile-form-name"
        label={intl.formatMessage({ id: 'forms.name.label' })}
        errors={errors}
        placeholder={intl.formatMessage({ id: 'forms.name.placeholder' })}
        register={register({
          required: intl.formatMessage({ id: 'forms.name.required' }),
        })}
      />
      <FlashButton
        type="submit"
        data-testid="portal-profile-form-submit"
        isDisabled={isSubmitting || loading}
        containerStyles={{marginTop: gutters.xSmallOne}}
      >
        Update Profile <SubmissionInProgress loading={loading} />
      </FlashButton>
    </form>
  );
};
