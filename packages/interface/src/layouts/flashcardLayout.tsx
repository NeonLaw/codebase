import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/core';
import React, { ReactChildren } from 'react';
import {
  colors,
  gutters,
  shadows,
  sizes,
} from '@neonlaw/shared-ui/src/themes/neonLaw';

import { ApolloProvider } from '@apollo/client';
import {
  AuthenticationContext
} from '@neonlaw/shared-ui/src/utils/authenticationContext';
import { Breadcrumbs } from '@neonlaw/shared-ui/src/components/breadcrumbs';
import { Container } from '@neonlaw/shared-ui/src/components/container';
import { Footer } from '@neonlaw/shared-ui/src/components/footer';
import {
  PublicNavigationBar
} from '@neonlaw/shared-ui/src/components/navigationBars/public';
import { Seo } from '../components/seo';
import { graphql } from 'gatsby';
import {
  publicClient
} from '@neonlaw/shared-ui/src/utils/authenticationContext';
import styled from '@emotion/styled';

const StyledFlashcardTemplate = styled.div`
    .flashcard-wrapper {
        max-width: ${sizes.textContainerMedium};
        margin: 0 auto;
        padding: ${gutters.small};
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
                        className="flashcard-wrapper"
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
      <Footer isWhite={true} currentSite="neon-law" />
    </Flex>
  );
};

export default FlashcardLayout;

export const pageQuery = graphql`
  query FlashcardByIdQuery($id: neon_UUID!) {
    neon {
      flashcardById(id: $id) {
        id
        prompt
        answer
        updatedAt
      }
    }
  }
`;
