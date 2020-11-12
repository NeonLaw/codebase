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
} from '@neonlaw/shared-ui/src/utils/authenticationContext';
import { Breadcrumbs } from '@neonlaw/shared-ui/src/components/breadcrumbs';
import { Container } from '@neonlaw/shared-ui/src/components/container';
import { EditOnGithub } from '@neonlaw/shared-ui/src/components/editOnGithub';
import { Footer } from '@neonlaw/shared-ui/src/components/footer';
import { MDXComponents } from '@neonlaw/print';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  NonLegalAdviceAlert
} from '@neonlaw/shared-ui/src/components/nonLegalAdviceAlert';
import {
  PublicNavigationBar
} from '@neonlaw/shared-ui/src/components/navigationBars/public';
import { Seo } from '../components/seo';
import { ShareButtons } from '@neonlaw/shared-ui/src/components/shareButtons';
import { graphql } from 'gatsby';
import {
  publicClient
} from '@neonlaw/shared-ui/src/utils/authenticationContext';
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
      <Footer
        fathomLink=""
        currentSite="neon-law"
      />
    </Flex>
  );
};

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
