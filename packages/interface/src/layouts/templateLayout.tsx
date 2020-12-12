import {
  Box,
  Divider,
  Flex,
  Heading,
} from '@chakra-ui/core';
import React, { ReactChildren } from 'react';
import { ApolloProvider } from '@apollo/client';
import {
  AuthenticationContext
} from '../utils/authenticationContext';
import { Breadcrumbs } from '../components/breadcrumbs';
import { Container } from '../components/container';
import { EditOnGithub } from '../components/editOnGithub';
import { Footer } from '../components/footer';
import { MDXComponents } from './print';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  NonLegalAdviceAlert
} from '../components/nonLegalAdviceAlert';
import {
  PublicNavigationBar
} from '../components/navigationBars/public';
import { Seo } from '../components/seo';
import { ShareButtons } from '../components/shareButtons';
import { graphql } from 'gatsby';
import {
  publicClient
} from '../utils/authenticationContext';
import { useSiteMetadata } from '../components/hooks';

const TemplateLayout: React.FC<{
  data: {
    mdx: {
      body: string,
      frontmatter: {
        title: string,
        slug: string,
        description?: string,
        layout?: string;
      }
    }
  },
  chlidren: ReactChildren
}> = ({ data }) => {
  const { body, frontmatter } = data.mdx;
  const { title, slug, description } = frontmatter;
  const { siteUrl } = useSiteMetadata();

  return (
    <Flex
      minHeight="100vh"
      direction="column"
    >
      <Seo title={title} description={description} />
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
                    <NonLegalAdviceAlert />
                    <Heading textAlign="center">
                      {title}
                    </Heading>
                    <MDXProvider components={MDXComponents}>
                      <MDXRenderer>{body}</MDXRenderer>
                    </MDXProvider>
                    <Divider margin="1em 0" />
                    <Flex width="100%" justifyContent="space-between">
                      <ShareButtons slug={slug} siteUrl={siteUrl} />
                      <EditOnGithub app="neon-law" path={slug} />
                    </Flex>
                  </Container>
                </Box>
              </>
            </ApolloProvider>
          );
        }}
      </AuthenticationContext.Consumer>
      <Footer />
    </Flex>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default TemplateLayout;

export const pageQuery = graphql`
  query TemplateQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        slug
        description
        layout
      }
    }
  }
`;
