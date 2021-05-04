import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { colors, gutters } from '../../styles/neonLaw';

import { Container } from '../container';
import Link from 'next/link';
import { TypeAhead } from '../typeAhead';
import styled from '@emotion/styled';
import { useIntl } from 'react-intl';
import { useUser } from '@auth0/nextjs-auth0';

const StyledBanner = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.6)),
    url('/images/hero.jpg');
  background-size: cover;
  background-position: right;
  background-attachment: fixed;
  color: ${colors.text.dark};
`;

const StyledHeadline = styled.div`
  margin-bottom: ${gutters.small};

  h1 {
    font-size: 4.5rem;
    font-weight: 400;
    color: ${colors.text.dark};

    @media(max-width: 767px) {
      font-size: 3.8rem;
    }
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

  return (
    <StyledBanner>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          maxHeight="900px"
          minHeight="600px"
          height="100vh"
          width="100%"
        >
          <VStack maxWidth={['400px', '500px', '751px']} textAlign="center">
            <Box>
              <Flex alignItems="center" direction="column">
                <StyledHeadline>
                  <h1>{intl.formatMessage({ id: 'banner.h1' })}</h1>
                  <p>{intl.formatMessage({ id: 'banner.title' })}</p>
                </StyledHeadline>
              </Flex>
              <TypeAhead />
              <Text
                margin={`${gutters.xSmall} 0 ${gutters.small}`}
                display={['none', 'none', 'inherit']}
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: 'banner.text' }),
                }}
              />
              <Text marginTop={gutters.small}>
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
    </StyledBanner>
  );
};
