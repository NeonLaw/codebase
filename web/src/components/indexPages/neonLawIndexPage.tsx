import {
  Box,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { colors, gutters, sizes } from '../../styles/neonLaw';
import { BaseFooter } from '../footer/baseFooter';
import { Button } from '../button';
import Image from 'next/image';
import { Seo } from '../seo';
import { StringInput } from '../inputs';
import { useColorMode } from '@chakra-ui/react';
import { useCreateQuestionMutation } from '../../utils/api';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';

export const NeonLawIndexPage = (): JSX.Element => {
  const { colorMode } = useColorMode();
  const intl = useIntl();
  const { handleSubmit, errors, register, reset } = useForm();

  const [createQuestion, { loading }] = useCreateQuestionMutation();

  const onSubmit = async ({ prompt }) => {
    const questionType = 'userQuery';

    await createQuestion({ variables: { prompt, questionType } });

    await reset();
  };

  return (
    <>
      <Seo title="Homepage" />
      <Center
        background={colors.background[colorMode]}
        as="main"
        display="flex"
        alignItems="center"
        height="100vh"
        color={colors.text[colorMode]}
      >
        <VStack maxWidth={['400px', '500px', sizes.textContainerSmall]}>
          <Box width="100%">
            <Flex alignItems="center">
              <Spacer />
              <Image
                src="/images/logo.svg"
                alt="Neon Law"
                width={200}
                height={200}
              />
              <Box>
                <Heading
                  as="h1"
                  fontWeight="400"
                  justifyItems="center"
                >
                Neon Law
                </Heading>
                <Heading
                  as="h5"
                  fontWeight="400"
                  justifyItems="center"
                >
                  {intl.formatMessage({ id: 'banner.title' })}
                </Heading>
              </Box>
              <Spacer />
            </Flex>
            <form
              onSubmit={handleSubmit(onSubmit as any)}
              style={{ color: colors.text[colorMode] }}
            >
              <StringInput
                testId="index-page-search"
                name="prompt"
                aria-label="prompt"
                errors={errors}
                placeholder={intl.formatMessage({
                  id: 'forms.legal_question.placeholder',
                })}
                register={register()}
              />
              <Button
                marginTop="1em"
                flash={true}
                width="100%"
                type="submit"
                aria-label="submit-prompt"
                disabled={loading}
              >
                {intl.formatMessage({ id: 'auth.sign_up' })}
              </Button>
            </form>
            <Text
              margin={`${gutters.xSmall} 0 ${gutters.small}`}
              color={colors.text[colorMode]}
              display={['none', 'none', 'inherit']}
            >
              {intl.formatMessage({ id: 'banner.text' })}
            </Text>
          </Box>
        </VStack>
      </Center>
      <BaseFooter />
    </>
  );
};
