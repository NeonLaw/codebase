import { Box, Flex } from '@chakra-ui/core';
import { FaPencilAlt } from 'react-icons/fa';
import React from 'react';

interface EditOnGithubInterface {
  path: string;
}

export const EditOnGithub = ({ path }: EditOnGithubInterface) => {
  const githubPath =
    'https://github.com/NeonLaw/interface/blob' +
    `/development/src/content${path}.mdx`;

  return (
    <Flex
      alignItems="center"
      cursor="pointer"
      onClick={() => window.open(githubPath, '_blank')}
      data-cy="edit-on-github"
    >
      Edit this page on GitHub
      &nbsp;
      <Box as={FaPencilAlt} />
    </Flex>
  );
};
