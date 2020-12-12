/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Flex, Text } from '@chakra-ui/core';
import {
  FaFacebookF, FaLinkedinIn, FaTwitter
} from 'react-icons/fa';
import React from 'react';

export const ShareButtons = ({ siteUrl, slug }) => {
  const url = `${siteUrl}${slug}`;

  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;

  const twitterUrl = `https://www.twitter.com/intent/tweet?url=${url}`;

  const linkedInUrl =
    `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;

  return (
    <Flex alignItems="center">
      <Text>
        Share this on:
      </Text>
      <Box
        as="a"
        cursor="pointer"
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF />
      </Box>
      <Text>
        &nbsp;
      </Text>
      <Box
        as="a"
        cursor="pointer"
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </Box>
      <Text>
        &nbsp;
      </Text>
      <Box
        as="a"
        cursor="pointer"
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </Box>
    </Flex>
  );
};
