/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Flex } from '@chakra-ui/react';

import { FaPencilAlt } from 'react-icons/fa';
import React from 'react';

interface EditOnGithubProps {
  filename: string;
}

export const EditOnGithub = ({ filename }: EditOnGithubProps) => {
  const githubPath = 'https://github.com/NeonLaw/codebase/tree/main' +
    `/web/src/pages/${filename}.mdx`;

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
      <Box display={['none', 'none', 'inherit']}>
        Edit this page on GitHub &nbsp;
      </Box>
      <Box as={FaPencilAlt} />
    </Flex>
  );
};
