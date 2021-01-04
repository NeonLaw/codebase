import { Box, Flex, Heading, Text, useColorMode } from '@chakra-ui/core';
import React, { ReactChildren } from 'react';
import {
  colors,
  gutters,
  shadows,
} from '../themes/neonLaw';

import { ApolloProvider } from '@apollo/client';
import { Breadcrumbs } from '../components/breadcrumbs';
import { Container } from '../components/container';
import { Footer } from '../components/footer';
import {
  PublicNavigationBar
} from '../components/navigationBars/public';
import { Seo } from '../components/seo';
import { getApolloClient } from '../utils/getApolloClient';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { useAuth0 } from '@auth0/auth0-react';

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
  const { getAccessTokenSilently } = useAuth0();
  const apolloClient = getApolloClient(getAccessTokenSilently);

  return (
    <Flex minHeight="100vh" direction="column">
      <Seo title={title} description={description} />
      <ApolloProvider client={apolloClient}>
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
      <Footer isWhite={true} />
    </Flex>
  );
};

/* eslint-disable-next-line import/no-default-export */
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
