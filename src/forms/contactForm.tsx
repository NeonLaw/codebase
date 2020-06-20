import { ReCaptchaButton, StringInput, Textarea } from '@forms/base';
import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';
import { useMutation } from '@apollo/react-hooks';


const CONTACT_FORM = gql`
  mutation createContactForm(
    $name: String!
    $email: String!
    $message: String!
    $captcha: JSON!
  ) {
    createContactForm(
      input: {
        contactForm: {
          name: $name
          email: $email
          message: $message
          captcha: $captcha
        }
      }
    ) {
      contactForm {
        id
      }
    }
  }
`;

export const ContactForm = () => {
  const intl = useIntl();

  const [
    contactForm,
    { loading: mutationLoading }
  ] = useMutation(CONTACT_FORM);

  const {
    handleSubmit,
    errors,
    register,
    reset,
    setValue,
    triggerValidation
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async ({ name, message, email, captchaToken }) => {
    setIsSubmitting(true);
    await triggerValidation('captchaToken');

    const captcha = JSON.stringify({ 'token': captchaToken });

    await contactForm(
      { variables: { captcha, email, message, name } }
    );

    await reset();

    setIsSubmitting(false);
  };

  const onVerifyCaptcha = async (token) => {
    setValue('captchaToken', token);
    await triggerValidation('captchaToken');
  };

  useEffect(() => {
    register(
      { name: 'captchaToken', type: 'custom' },
      { required: 'You must fill out the CAPTCHA' }
    );
  }, [register]);


  return (
    <form onSubmit={handleSubmit(onSubmit as any)}>
      <StringInput
        name="name"
        testId="contact-form-name"
        label={`${intl.formatMessage({ id: 'contactForm.name.label' })}`}
        errors={errors}
        placeholder={`${intl.formatMessage({ id: 'contactForm.name.ph' })}`}
        register={register({ required: 'Name is required.' })}
      />
      <StringInput
        name="email"
        testId="contact-form-email"
        errors={errors}
        label={`${intl.formatMessage({ id: 'contactForm.email.label' })}`}
        placeholder={`${intl.formatMessage({ id: 'contactForm.email.ph' })}`}
        register={register({ required: 'Email is required.' })}
      />
      <Textarea
        name="message"
        label={`${intl.formatMessage({ id: 'contactForm.message.label' })}`}
        errors={errors}
        placeholder={`${intl.formatMessage({ id: 'contactForm.message.ph' })}`}
        register={register({ required: 'Message is required.' })}
      />
      <ReCaptchaButton
        onVerifyCaptcha={onVerifyCaptcha}
        mt={4}
        color="black"
        isLoading={isSubmitting || mutationLoading}
        loadingText="submitting"
        type="submit"
      >
        {intl.formatMessage({ id: 'contactForm.send' })}
      </ReCaptchaButton>
    </form>
  );
};
