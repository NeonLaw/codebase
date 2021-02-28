import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import { colors, gutters, sizes } from '../../styles/neonLaw';

import { BaseFooter } from '../footer/baseFooter';
import { Button } from '../button';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Experience } from '../homepage/experience';
import Image from 'next/image';
import Link from 'next/link';
import { Seo } from '../seo';
import { StringInput } from '../inputs';
import { WhatWeCanHelpWith } from '../homepage/whatWeCanHelpWith';
import { WhyNeonLaw } from '../homepage/whyNeonLaw';
import { useColorMode } from '@chakra-ui/react';
import { useCreateQuestionMutation } from '../../utils/api';
import { useForm } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { useRef } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export const NeonLawIndexPage = (): JSX.Element => {
  const { colorMode } = useColorMode();
  const intl = useIntl();
  const { handleSubmit, errors, register, reset } = useForm();
  const { user } = useUser();
  const nextSectionRef = useRef(null);

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
                <Heading as="h1" fontWeight="400" justifyItems="center">
                  {intl.formatMessage({ id: 'banner.h1' })}
                </Heading>
                <Heading as="h5" fontWeight="400" justifyItems="center">
                  {intl.formatMessage({ id: 'banner.title' })}
                </Heading>
              </Box>
              <Spacer />
            </Flex>
            <form
              onSubmit={handleSubmit(onSubmit as any)}
              style={{ color: colors.text[colorMode] }}
            >
              <Flex>
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
                  flash={true}
                  bg="cyan.500"
                  borderRadius="5px"
                  color="white"
                  _hover={{ bg: 'cyan.400' }}
                  type="submit"
                  aria-label="submit-prompt"
                  disabled={loading}
                >
                  {intl.formatMessage({ id: 'auth.sign_up' })}
                </Button>
              </Flex>
            </form>
            <Text
              margin={`${gutters.xSmall} 0 ${gutters.small}`}
              color={colors.text[colorMode]}
              display={['none', 'none', 'inherit']}
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: 'banner.text' }),
              }}
            />
            <Text>
              {intl.formatMessage({ id: 'banner.client' })} &nbsp;
              {user ? (
                <>
                  <Link href="/portal" passHref={true}>
                    <a href="/portal" style={{ textDecoration: 'underline' }}>
                      {intl.formatMessage({ id: 'banner.view_matters' })}
                    </a>
                  </Link>
                  <span>&nbsp;or&nbsp;</span>
                  <Link href="/api/auth/logout" passHref={true}>
                    <a
                      href="/api/auth/logout"
                      style={{ textDecoration: 'underline' }}
                    >
                      {intl.formatMessage({ id: 'banner.logout' })}
                    </a>
                  </Link>
                </>
              ) : (
                <Link href="/api/auth/login">
                  <a
                    href="/api/auth/login"
                    style={{ textDecoration: 'underline' }}
                  >
                    {intl.formatMessage({ id: 'banner.signin' })}
                  </a>
                </Link>
              )}
              .
            </Text>
            <Box width="100%" height="100px" />
          </Box>
        </VStack>
      </Center>
      <Flex marginTop="-3em" width="100%">
        <IconButton
          aria-label="Learn More"
          margin="0 auto"
          icon={<ChevronDownIcon />}
          onClick={() => {
            nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </Flex>
      <Box ref={nextSectionRef} marginTop="3em">
        <WhatWeCanHelpWith />
        <WhyNeonLaw />
        <Experience />
      </Box>
      <BaseFooter />
    </>
  );
};
