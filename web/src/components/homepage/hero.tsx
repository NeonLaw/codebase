import { Box, Flex, Text, VStack, useColorMode } from '@chakra-ui/react';
import { colors, gutters } from '../../styles/neonLaw';
import { Container } from '../container';
import Link from 'next/link';
import { TypeAhead } from '../typeAhead';
import styled from '@emotion/styled';
import { useIntl } from 'react-intl';
import { useUser } from '@auth0/nextjs-auth0';

const StyledHeadline = styled.div`
  margin-bottom: ${gutters.small};

  h1 {
    font-size: 4.5rem;
    font-weight: 400;
  }

  p {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 3px;
  }
`;

export const Hero = () => {
  const intl = useIntl();
  const { user } = useUser();
  const { colorMode } = useColorMode();

  return (
    <Container>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxHeight="900px"
        minHeight="600px"
        height="100vh"
        width="100%"
        background={colors.background[colorMode]}
        color={colors.text[colorMode]}
        backgroundSize="cover"
        backgroundPosition="left"
        backgroundAttachment="fixed"
      >
        <VStack
          maxWidth={['400px', '500px', '751px']}
          textAlign="center"
        >
          <Box>
            <Flex alignItems="center" direction="column">
              <StyledHeadline>
                <h1>
                  {intl.formatMessage({ id: 'banner.h1' })}
                </h1>
                <p>
                  {intl.formatMessage({ id: 'banner.title' })}
                </p>
              </StyledHeadline>
            </Flex>
            <TypeAhead />
            <Text
              margin={`${gutters.xSmall} 0 ${gutters.small}`}
              color={colors.text[colorMode]}
              display={['none', 'none', 'inherit']}
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({ id: 'banner.text' }),
              }}
            />
            <Text>
              <span>{intl.formatMessage({ id: 'banner.client' })}</span>
                &nbsp;
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
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};
