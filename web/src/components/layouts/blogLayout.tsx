import { Box, Divider, Flex, Heading, useColorMode } from '@chakra-ui/react';
import {
  colors,
  gutters,
  shadows,
} from '../../styles/neonLaw';
import { ApolloProvider } from '@apollo/client';
import { BaseFooter } from '../footer/baseFooter';
import { Breadcrumbs } from '../breadcrumbs';
import { Container } from '../container';
import { EditOnGithub } from '../editOnGithub';
import { Image } from '../image';
import { MDXComponents } from '../mdxComponents';
import { MDXProvider } from '@mdx-js/react';
import { PublicNavigationBar } from '../navigationBars/publicNavigationBar';
import { Seo } from '../seo';
import { ShareButtons } from '../shareButtons';
import { getApolloClient } from '../../utils/getApolloClient';
import styled from '@emotion/styled';
import { useAuth0 } from '@auth0/auth0-react';

const StyledPostTemplate = styled.div`
  .post-wrapper {
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

      & > *:first-of-type {
        margin-bottom: ${gutters.xSmallOne};
      }
    }
  }
`;

export const BlogLayout = ({ children, meta }) => {
  const { title, slug, featuredImage, description, widescreen } = meta;
  const { colorMode } = useColorMode();
  const { getAccessTokenSilently } = useAuth0();
  const apolloClient = getApolloClient(getAccessTokenSilently);

  return (
    <Flex minHeight="100vh" direction="column">
      <Seo title={title} image={featuredImage} description={description} />
      <ApolloProvider client={apolloClient}>
        <StyledPostTemplate>
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
                  className="post-wrapper wrapper--centered"
                  background={colors.background[colorMode]}
                  color={colors.text[colorMode]}
                  border={`1px solid ${colors.borders[colorMode]}`}
                >
                  <Breadcrumbs />
                  <Heading
                    as="h1"
                    fontSize="xl"
                    marginBottom={gutters.xSmall}
                    fontWeight="400"
                  >
                    {title}
                  </Heading>
                  {featuredImage && (
                    <Box borderWidth="1px" rounded="lg" overflow="hidden">
                      <Image
                        src={featuredImage}
                        alt={title}
                        aspectRatio={widescreen ? 2 : 16 / 9}
                      />
                    </Box>
                  )}
                  <MDXProvider components={MDXComponents}>
                    {children}
                  </MDXProvider>
                  <Divider margin="1em 0" />
                  <div className="links">
                    <ShareButtons slug={slug} siteUrl="https://neonlaw.com" />
                    <EditOnGithub app="interface" path={slug} />
                  </div>
                </Box>
              </Container>
            </Box>
          </Box>
        </StyledPostTemplate>
      </ApolloProvider>
      <BaseFooter isWhite={true} />
    </Flex>
  );
};
