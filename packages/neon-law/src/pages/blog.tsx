import { Box, Flex, Heading, List, ListItem, Text } from '@chakra-ui/core';
import { Link, graphql } from 'gatsby';

import { Container } from '@neonlaw/shared-ui/src/components/container';
import { FormattedDate } from 'gatsby-plugin-intl';
import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';
import { gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';

const BlogIndex = ({ data }) => {
  const { edges } = data.allMdx;

  return (
    <PublicLayout>
      <>
        <Container>
          <Box padding="8rem 0 4rem">
            <Heading fontWeight="normal" marginBottom={gutters.small}>
              Neon Law Blog
            </Heading>

            <List spacing="0.5rem">
              {edges.map(({ node: post }) => (
                <ListItem key={post.id}>
                  <Link to={post.frontmatter.slug}>
                    <Flex alignItems="center" justifyContent="space-between">
                      <Heading fontWeight="normal" fontSize="md">
                        {post.frontmatter.title}
                      </Heading>
                      <Text>
                        <FormattedDate
                          value={new Date(post.frontmatter.updatedAt)}
                        />
                      </Text>
                    </Flex>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </>
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
          }
        }
      }
    }
  }
`;

export default BlogIndex;
