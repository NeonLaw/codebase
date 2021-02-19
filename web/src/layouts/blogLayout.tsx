import { Box, Divider, Flex, Heading, useColorMode } from '@chakra-ui/react';
import {
  colors,
  gutters,
  shadows,
} from '../styles/neonLaw';

import { ApolloProvider } from '@apollo/client';
import { BaseFooter } from '../components/footer/baseFooter';
import { Breadcrumbs } from '../components/breadcrumbs';
import { Container } from '../components/container';
import { EditOnGithub } from '../components/editOnGithub';
import { Image } from '../components/image';
import { MDXComponents } from '../components/mdxComponents';
import { MDXProvider } from '@mdx-js/react';
import { PublicNavigationBar } from '../components/navigationBars/publicNavigationBar';
import { Seo } from '../components/seo';
import { ShareButtons } from '../components/shareButtons';
import { getApolloClient } from '../utils/getApolloClient';
import styled from '@emotion/styled';

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
  const apolloClient = getApolloClient();

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
