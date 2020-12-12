import { Box, Heading, List, ListItem } from '@chakra-ui/core';
import { gutters, sizes } from '../themes/neonLaw';
import { Container } from '../components/container';
import { Image } from '../components/image';
import { PostBanner } from '../components/blog/postBanner';
import { PublicLayout } from '../layouts/publicLayout';
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
              {edges.map(({ node: post }) => {
                const { excerpt } = post;
                const {
                  title,
                  slug,
                  updatedAt,
                  featuredImage,
                  widescreen
                } = post.frontmatter;

                return (
                  <ListItem key={post.id} className="list-item">
                    <PostBanner
                      title={title}
                      slug={slug}
                      date={updatedAt}
                      excerpt={excerpt}
                    >
                      <div className="img">
                        <Image
                          aspectRatio={widescreen ? 2 : 16 / 9}
                          src={featuredImage ?
                            featuredImage :
                            'blog-featured-placeholder.jpg'
                          }
                          alt={title}
                        />
                      </div>
                    </PostBanner>
                  </ListItem>
                );
              })}
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

/* eslint-disable-next-line import/no-default-export */
export default BlogIndex;
