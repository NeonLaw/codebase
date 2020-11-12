import { Box, Heading, List, ListItem } from '@chakra-ui/core';
import { gutters, sizes } from '@neonlaw/shared-ui/src/themes/neonLaw';

import { Container } from '@neonlaw/shared-ui/src/components/container';
import { PostBanner } from '../components/blog/post-banner';
import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';
import { Seo } from '../components/seo';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

const StyledBlog = styled.div`
  .list-item {
    &:not(:last-child) {
      margin-bottom: ${gutters.small};
    }
  }
`;

const BlogIndex = ({ data }) => {
  const { edges } = data.allMdx;

  return (
    <PublicLayout isBgLighter={true}>
      <StyledBlog>
        <Seo title="Blog" />
        <Container>
          <Box padding="9rem 0 4rem">
            <Heading fontWeight="normal" marginBottom={gutters.small}>
              Neon Law Blog
            </Heading>

            <List spacing="0.5rem" maxWidth={sizes.textContainerMedium}>
              {edges.map(({ node: post }) => (
                <ListItem key={post.id} className="list-item">
                  <PostBanner
                    title={post.frontmatter.title}
                    slug={post.frontmatter.slug}
                    date={post.frontmatter.updatedAt}
                    excerpt={post.excerpt}
                    featuredImage={post.frontmatter.featuredImage}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </StyledBlog>
    </PublicLayout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx(
      filter: { frontmatter: { slug: { regex: "/blog/" } } }
      sort: { fields: frontmatter___updatedAt, order: DESC }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            updatedAt
            featuredImage
            widescreen
          }
        }
      }
    }
  }
`;

export default BlogIndex;
