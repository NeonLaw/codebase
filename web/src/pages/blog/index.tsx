import { Box, List, ListItem } from '@chakra-ui/react';
import { gutters, sizes } from '../../styles/neonLaw';
import { Container } from '../../components/container';
import Image from 'next/image';
import { PostBanner } from '../../components/blog/postBanner';
import { PublicLayout } from '../../components/layouts/publicLayout';
import React from 'react';
import { Seo } from '../../components/seo';
import styled from '@emotion/styled';

const StyledBlog = styled.div`
  .list-item {
    &:not(:last-child) {
      margin-bottom: ${gutters.small};
    }
  }
`;

const BlogIndex = () => {
  const edges = [];
  return (
    <PublicLayout isBgLighter={true}>
      <StyledBlog>
        <Seo title="Blog" />
        <Container>
          <Box padding="9rem 0 4rem">
            <h1 style={{marginBottom: gutters.xSmallOne}}>
              Neon Law Blog
            </h1>

            <List spacing="0.5rem" maxWidth={sizes.textContainerMedium}>
              {edges.map(({ node: post }) => {
                const { excerpt } = post;
                const {
                  title,
                  slug,
                  updatedAt,
                  featuredImage,
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
                          src={featuredImage ?
                            featuredImage :
                            '/images/blog-featured-placeholder.jpg'
                          }
                          alt={title}
                          width="100px"
                          height="100px"
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

/* eslint-disable-next-line import/no-default-export */
export default BlogIndex;
