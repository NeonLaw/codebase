import { Box, Divider, Flex, Heading, useColorMode } from '@chakra-ui/core';
import React, { ReactChildren } from 'react';
import {
  colors,
  gutters,
  shadows,
} from '../themes/neonLaw';

import { ApolloProvider } from '@apollo/client';
import { Breadcrumbs } from '../components/breadcrumbs';
import { Container } from '../components/container';
import { EditOnGithub } from '../components/editOnGithub';
import { Footer } from '../components/footer';
import { Image } from '../components/image';
import { MDXComponents } from '../utils/mdxComponents';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  PublicNavigationBar
} from '../components/navigationBars/public';
import { Seo } from '../components/seo';
import { ShareButtons } from '../components/shareButtons';
import { getApolloClient } from '../utils/getApolloClient';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { useAuth0 } from '@auth0/auth0-react';
import { useSiteMetadata } from '../components/hooks';

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

            & > *:first-child {
                margin-bottom: ${gutters.xSmallOne};
            }
        }
    }
`;

const PostLayout: React.FC<{
  data: {
    mdx: {
      body: string;
      frontmatter: {
        title: string;
        featuredImage?: any;
        slug: string;
        description?: string;
        widescreen?: string;
      };
    };
  };
  chlidren: ReactChildren;
}> = ({ data }) => {
  const { body, frontmatter } = data.mdx;
  const { title, slug, featuredImage, description, widescreen } = frontmatter;
  const { siteUrl } = useSiteMetadata();
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
                    <MDXRenderer>{body}</MDXRenderer>
                  </MDXProvider>
                  <Divider margin="1em 0" />
                  <div className="links">
                    <ShareButtons slug={slug} siteUrl={siteUrl} />
                    <EditOnGithub app="interface" path={slug} />
                  </div>
                </Box>
              </Container>
            </Box>
          </Box>
        </StyledPostTemplate>
      </ApolloProvider>
      <Footer isWhite={true} />
    </Flex>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default PostLayout;

export const pageQuery = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        slug
        featuredImage
        description
        widescreen
      }
    }
  }
`;
