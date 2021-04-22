import {
  useCreateLetterMutation,
  usePublicAddressesByNameQuery
} from '../../utils/api';
import { useRef, useState } from 'react';
import { CreateButton } from '../buttons/createButton';
import { InputBuilder } from '../forms/inputBuilder';
import { colors } from '../../styles/neonLaw';
import { publicLetterFields } from '../fields/letterFields';
import { useColorMode } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export const CreateLetterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset
  } = useForm();
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

  const { data: addressee } = usePublicAddressesByNameQuery(
    { variables: { name: 'rickie' } }
  );
  const addresseeId = addressee.addresses.nodes[0].id;

  const { data: addressor } = usePublicAddressesByNameQuery(
    { variables: { name: 'neon-law' } }
  );
  const addressorId = addressor.addresses.nodes[0].id;

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
        fields={publicLetterFields}
        control={control}
        errors={errors}
        register={register}
        currentValues={{
          addresseeId,
          addressorId,
        }}
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
