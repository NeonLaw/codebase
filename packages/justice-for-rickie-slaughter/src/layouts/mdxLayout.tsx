import {
  Box,
  Divider,
  Flex,
  Heading,
} from '@chakra-ui/core';
import React, { ReactChildren } from 'react';
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
} from '../components/navigationBars/public';
import { Seo } from '../components/seo';
import { ShareButtons } from '@neonlaw/shared-ui/src/components/shareButtons';
import { graphql } from 'gatsby';
import { useSiteMetadata } from '../components/hooks';

const MdxLayout: React.FC<{
  data: {
    mdx: {
      body: string,
      frontmatter: {
        title: string,
        featuredImage?: any,
        slug: string,
        description?: string,
      }
    }
  },
  chlidren: ReactChildren
}> = ({ data }) => {
  const { body, frontmatter } = data.mdx;
  const { title, slug, description, featuredImage } = frontmatter;
  const { siteUrl } = useSiteMetadata();
  /* eslint-disable max-len */
  /* eslint-enable max-len */

  return (
    <Flex
      minHeight="100vh"
      direction="column"
    >
      <Seo title={title} description={description} />
      <>
        <PublicNavigationBar />
        <Box
          flex={1}
          padding="8em 0 4em 0"
        >
          <Container>
            <Breadcrumbs />
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
            <Heading textAlign="center">
              {title}
            </Heading>
            <MDXProvider components={MDXComponents}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
            <Divider margin="1em 0" />
            <Flex width="100%" justifyContent="space-between">
              <ShareButtons siteUrl={siteUrl} slug={slug} />
              <EditOnGithub app="justice-for-rickie-slaughter" path={slug} />
            </Flex>
          </Container>
        </Box>
      </>
      <Footer
        isWhite={true}
        currentSite="justice-for-rickie-slaughter"
      />
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
        description
        featuredImage
      }
    }
  }
`;
