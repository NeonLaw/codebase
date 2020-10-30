import React, { useRef } from 'react';
import { Textarea } from '@neonlaw/shared-ui/src/components/inputs';
import { useForm } from 'react-hook-form';

export const ContactForm = () => {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = async (values) => {
    alert(values);
  };
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      onSubmit={handleSubmit(onSubmit as any)}
      ref={formRef}
    >
      <Textarea
        control={control}
        testId="contact-form-inquiry"
        errors={errors}
        name="Inquiry"
        label="Inquiry"
      />
    </form>
  );
};
