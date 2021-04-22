import {
  useCreatePublicLetterMutation,
  usePublicAddressesByNameQuery
} from '../../utils/api';
import { useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { CreateButton } from '../buttons/createButton';
import { InputBuilder } from './inputBuilder';
import { colors } from '../../styles/neonLaw';
import { publicLetterFields } from '../fields/publicLetterFields';
import { useColorMode } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export const CreatePublicLetterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const { colorMode } = useColorMode();
  const formRef = useRef<HTMLFormElement>(null);

  const [createMutation, { loading }] = useCreatePublicLetterMutation();

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

  const {
    data: addressee,
    loading: loadingAddressee
  } = usePublicAddressesByNameQuery(
    { variables: { name: 'rickie' } }
  );

  const {
    data: addressor,
    loading: loadingAddressor
  } = usePublicAddressesByNameQuery(
    { variables: { name: 'neon-law' } }
  );
  if (loadingAddressee || loadingAddressor) {
    return <h1>loading</h1>;
  }

  const addresseeId = addressee.addresses.nodes[0].id;
  const addressorId = addressor.addresses.nodes[0].id;

  return (
    <form
      onSubmit={handleSubmit(onSubmit as any)}
      style={{ color: colors.text[colorMode] }}
      ref={formRef}
    >
      <Box color="red">
        {formError}
      </Box>
      <InputBuilder
        resourceName="publicLetter"
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
