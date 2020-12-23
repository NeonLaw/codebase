import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/core';
import React, { ReactChildren } from 'react';
import {
  colors,
  gutters,
  shadows,
} from '../../../themes/neonLaw';

import { ApolloProvider } from '@apollo/client';
import {
  AuthenticationContext
} from '../../../utils/authenticationContext';
import { Breadcrumbs } from '../../../components/breadcrumbs';
import { Container } from '../../../components/container';
import { Footer } from '../../../components/footer';
import {
  PublicNavigationBar
} from '../../../components/navigationBars/public';
import { Seo } from '../../../components/seo';
import {
  publicClient
} from '../../../utils/authenticationContext';
import styled from '@emotion/styled';

const StyledFlashcardTemplate = styled.div`
  .flashcard-wrapper {
    box-shadow: ${shadows.light2};

    @media(max-width: 600px) {
      padding: ${gutters.small} ${gutters.xSmall};
    }

    @media(max-width: 400px) {
      padding: ${gutters.small} ${gutters.xSmallOne};
    }
  }

  h2 {
    margin-top: ${gutters.medium};
  }

  pre {
    overflow-x: scroll;
  }

  .links {
    display: flex;
    justify-content: space-between;

    @media(max-width: 550px) {
      flex-direction: column;

      & > *:first-child {
        margin-bottom: ${gutters.xSmallOne};
      }
    }
  }
`;

const FlashcardLayout: React.FC<{
  data: {
    neon: {
      flashcardById: {
        prompt: string;
        answer: string;
      };
    };
  };
  chlidren: ReactChildren;
}> = ({ data }) => {
  const { prompt, answer } = data.neon.flashcardById;
  const { colorMode } = useColorMode();
  const title = `Neon Law | Flashcard | ${prompt}`;
  const description = answer;

  return (
    <Flex minHeight="100vh" direction="column">
      <Seo title={title} description={description} />
      <AuthenticationContext.Consumer>
        {({ isLoading, apolloClient }) => {
          return (
            <ApolloProvider client={isLoading ? publicClient : apolloClient}>
              <StyledFlashcardTemplate>
                <PublicNavigationBar />
                <Box background={colors.lighterBg[colorMode]}>
                  <Box
                    as="main"
                    aria-label="Main Content"
                    flex={1}
                    padding="9rem 0 4rem"
                  >
                    <Container>
                      <Box
                        className="flashcard-wrapper wrapper--centered"
                        background={colors.background[colorMode]}
                        border={`1px solid ${colors.borders[colorMode]}`}
                      >
                        <Breadcrumbs />
                        <Heading
                          as="h1"
                          fontSize="xl"
                          marginBottom={gutters.xSmall}
                          fontWeight="400"
                        >
                          {prompt}
                        </Heading>
                        <Text>{answer}</Text>
                      </Box>
                    </Container>
                  </Box>
                </Box>
              </StyledFlashcardTemplate>
            </ApolloProvider>
          );
        }}
      </AuthenticationContext.Consumer>
      <Footer isWhite={true} />
    </Flex>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default FlashcardLayout;
