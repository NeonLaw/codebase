/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Flex } from '@chakra-ui/react';

import { FaPencilAlt } from 'react-icons/fa';
import React from 'react';

interface EditOnGithubInterface {
  app: string;
  path: string;
}

export const EditOnGithub = ({ path }: EditOnGithubInterface) => {
  const contentPath = path === '/' ? '/index' : path;
  const githubPath = 'https://github.com/NeonLaw/codebase/blob' +
    `/web/src/pages/${contentPath.split('/')[2]}.mdx`;

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
