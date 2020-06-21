import { Box, Tooltip } from '@chakra-ui/core';
import { FaPencilAlt } from 'react-icons/fa';
import React from 'react';

interface EditOnGithubInterface {
  path: string;
}

export const EditOnGithub = ({ path }: EditOnGithubInterface) => {
  const githubPath =
    'https://github.com/NeonLaw/interface/edit/' +
    `development/src/posts${path}.mdx`;

  return (
    <Box
      cursor="pointer"
      onClick={() => window.open(githubPath, '_blank')}
      data-cy="edit-on-github"
    >
      <Tooltip
        hasArrow={true}
        label="Edit on GitHub"
        aria-label="Edit on GitHub"
      >
        <Box as={FaPencilAlt} />
      </Tooltip >
    </Box>
  );
};
