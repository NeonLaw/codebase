import { useRef, useState } from 'react';
import { CreateButton } from '../buttons/createButton';
import { InputBuilder } from '../forms/inputBuilder';
import { colors } from '../../styles/neonLaw';
import { letterFields } from '../fields/letterFields';
import { useColorMode } from '@chakra-ui/react';
import { useCreateLetterMutation } from '../../utils/api';
import { useForm } from 'react-hook-form';

export const CreateLetterForm = () => {
  const { control, handleSubmit, errors, register, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const [createMutation, { loading }] = useCreateLetterMutation();

  const onSubmit = async (variables) => {
    await createMutation({
      variables,
    }).then(async () => {
      setFormError('');
      await reset();
      setIsSubmitting(false);
    }).catch((apiErrors) => {
      setFormError(apiErrors.message);
      setIsSubmitting(false);
    });
  };

  const { colorMode } = useColorMode();
  const formRef = useRef<HTMLFormElement>(null);


  return (
    <form
      onSubmit={handleSubmit(onSubmit as any)}
      style={{ color: colors.text[colorMode] }}
      ref={formRef}
    >
      {formError}
      <InputBuilder
        resourceName="letter"
        fields={letterFields}
        control={control}
        errors={errors}
        register={register}
        currentValues={{}}
      />
      <CreateButton
        dasherizedResourceName="letter"
        titlecaseResourceName="Letter"
        isSubmitting={isSubmitting}
        createMutationLoading={loading}
      />
    </form>
  );
};
