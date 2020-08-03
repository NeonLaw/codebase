/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Flex } from '@chakra-ui/core';
import { FaPencilAlt } from 'react-icons/fa';
import React from 'react';

interface EditOnGithubInterface {
  app: string;
  path: string;
}

export const EditOnGithub = ({ app, path }: EditOnGithubInterface) => {
  const contentPath = path === '/' ? '/index' : path;

  const githubPath =
    'https://github.com/NeonLaw/interface/blob' +
    `/development/packages/${app}/src/content${contentPath}.mdx`;

  return (
    <Flex
      alignItems="center"
      cursor="pointer"
      as="a"
      href={githubPath}
      target="_blank"
      rel="noopener noreferrer"
      data-cy="edit-on-github"
    >
      Edit this page on GitHub
      &nbsp;
      <Box as={FaPencilAlt} />
    </Flex>
  );
};
