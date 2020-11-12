import { Box, Divider, Flex, Heading, useColorMode } from '@chakra-ui/core';
import React, { ReactChildren } from 'react';
import { colors, gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';

import { ApolloProvider } from '@apollo/client';
import {
  AuthenticationContext
} from '@neonlaw/shared-ui/src/utils/authenticationContext';
import { Breadcrumbs } from '@neonlaw/shared-ui/src/components/breadcrumbs';
import { Container } from '@neonlaw/shared-ui/src/components/container';
import { EditOnGithub } from '@neonlaw/shared-ui/src/components/editOnGithub';
import { Footer } from '@neonlaw/shared-ui/src/components/footer';
import { Image } from '../components/image';
import { MDXComponents } from '@neonlaw/shared-ui/src/utils/mdxComponents';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
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

const MdxLayout: React.FC<{
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
  const fathomLink = 'https://app.usefathom.com/share/dublghdj/www.neonlaw.com';

  return (
    <Flex minHeight="100vh" direction="column">
      <Seo title={title} image={featuredImage} description={description} />
      <AuthenticationContext.Consumer>
        {({ isLoading, apolloClient }) => {
          return (
            <ApolloProvider client={isLoading ? publicClient : apolloClient}>
              <>
                <PublicNavigationBar />
                <Box background={colors.lighterBg[colorMode]}>
                  <Box
                    as="main"
                    aria-label="Main Content"
                    flex={1}
                    padding="9rem 0 4rem"
                  >
                    <Container>
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
                      <Flex width="100%" justifyContent="space-between">
                        <ShareButtons slug={slug} siteUrl={siteUrl} />
                        <EditOnGithub app="interface" path={slug} />
                      </Flex>
                    </Container>
                  </Box>
                </Box>
              </>
            </ApolloProvider>
          );
        }}
      </AuthenticationContext.Consumer>
      <Footer isWhite={true} fathomLink={fathomLink} currentSite="neon-law" />
    </Flex>
  );
};

export default MdxLayout;

export const pageQuery = graphql`
  query ContentQuery($id: String) {
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
