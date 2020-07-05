import {
  Box,
  Divider,
  Flex,
  Heading,
} from '@chakra-ui/core';
import React, { ReactChildren } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthenticationContext } from '@utils/authenticationContext';
import { Breadcrumbs } from '@components/breadcrumbs';
import { Container } from '@components/container';
import { EditOnGithub } from '@components/editOnGithub';
import { Footer } from '@components/footer';
import { Image } from '@components/image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { PrivacyDisclaimer } from '@components/privacyDisclaimer';
import { PublicNavigationBar } from '@components/navigationBars/public';
import { Seo } from '@components/seo';
import { ShareButtons } from '@components/shareButtons';
import { graphql } from 'gatsby';
import { publicClient } from '@utils/authenticationContext';

const MdxLayout: React.FC<{
  data: {
    mdx: {
      body: string,
      frontmatter: {
        title: string,
        featuredImage?: any,
        slug: string,
      }
    }
  },
  chlidren: ReactChildren
}> = ({ data }) => {
  const { body, frontmatter } = data.mdx;
  const { title, slug, featuredImage } = frontmatter;

  return (
    <Flex
      minHeight="100vh"
      direction="column"
    >
      <Seo title={title} image={featuredImage} />
      <AuthenticationContext.Consumer>
        {({ isLoading, apolloClient }) => {
          return (
            <ApolloProvider client={isLoading ? publicClient : apolloClient}>
              <>
                <PublicNavigationBar />
                <Box
                  flex={1}
                  padding="8em 0 4em 0"
                >
                  <Container>
                    <Breadcrumbs />
                    <Heading textAlign="center">
                      {title}
                    </Heading>
                    {featuredImage &&
                      (<Box
                        borderWidth="1px"
                        rounded="lg"
                        overflow="hidden"
                      >
                        <Image
                          src={featuredImage}
                          alt={title}
                          aspectRatio={16 / 9}
                        />
                      </Box>)
                    }
                    <MDXRenderer>{body}</MDXRenderer>
                    <Divider margin="1em 0" />
                    <Flex width="100%" justifyContent="space-between">
                      <ShareButtons slug={slug} />
                      <EditOnGithub path={slug} />
                    </Flex>
                  </Container>
                </Box>
              </>
            </ApolloProvider>
          );
        }}
      </AuthenticationContext.Consumer>
      <PrivacyDisclaimer />
      <Footer />
    </Flex>
  );
};

export default MdxLayout;

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        slug
        featuredImage
      }
    }
  }
`;
