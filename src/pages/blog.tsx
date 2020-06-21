import { Flex, Heading, List, ListItem, Text } from '@chakra-ui/core';
import { Link, graphql } from 'gatsby';
import { PublicLayout } from '@layouts/public';
import React from 'react';

const BlogIndex = ({ data }) => {
  const { edges } = data.allMdx;

  const sortedPosts = edges.sort((a, b) => {
    return a.node.frontmatter.updatedAt > b.node.frontmatter.updatedAt ? 1 : -1;
  });

  return (
    <PublicLayout>
      <>
        <Heading textAlign="center">Neon Law Blog</Heading>

        <List spacing="0.5rem">
          {sortedPosts.map(({ node: post }) => (
            <ListItem key={post.id}>
              <Link to={'/blog' + post.frontmatter.slug}>
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Heading size="md">{post.frontmatter.title}</Heading>
                  <Text>
                    {post.frontmatter.updatedAt}
                  </Text>
                </Flex>
              </Link>
            </ListItem>
          ))}
        </List>
      </>
    </PublicLayout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
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
