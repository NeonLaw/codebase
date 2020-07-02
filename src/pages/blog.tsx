import { Flex, Heading, List, ListItem, Text } from '@chakra-ui/core';
import { Link, graphql } from 'gatsby';
import { FormattedDate } from 'gatsby-plugin-intl';
import { PublicLayout } from '@layouts/public';
import React from 'react';

const BlogIndex = ({ data }) => {
  const { edges } = data.allMdx;

  return (
    <PublicLayout>
      <>
        <Heading textAlign="center">Neon Law Blog</Heading>

        <List spacing="0.5rem">
          {edges.map(({ node: post }) => (
            <ListItem key={post.id}>
              <Link to={'/blog' + post.frontmatter.slug}>
                <Flex alignItems="center" justifyContent="space-between">
                  <Heading size="md">{post.frontmatter.title}</Heading>
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
      </>
    </PublicLayout>
  );
};

export const pageQuery = graphql`
  query blogIndex {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content\//" } }
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
