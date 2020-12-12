/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Heading, theme } from '@chakra-ui/core';

import { Link } from '../link';
import React from 'react';

export interface HelpWithProps {
  text: string;
  image: string;
}

export const HelpWith = ({ image, text }: HelpWithProps) => (
  <Box
    as={Link}
    to="#"
    position="relative"
    padding="5rem 3rem"
    display="block"
    background={`
      linear-gradient(rgba(0, 0, 0, 0.45), rgba(0,0,0, 1)),
      url(${image})
    `}
    backgroundSize="cover"
    backgroundPosition="center"
    color={theme.colors.white}
    textAlign="center"
    _after={{
      background: theme.colors.cyan['500'],
      content: '""',
      display: 'block',
      height: '100%',
      left: 0,
      opacity: 0,
      position: 'absolute',
      right: '100%',
      top: 0,
      transition: 'all .3s ease-in',
      width: '0%',
    }}
    _hover={{
      '&:after': {
        opacity: '.2',
        right: '0',
        width: '100%',
      },
    }}
    _focus={{
      '&:after': {
        opacity: '.2',
        right: '0',
        width: '100%',
      },
    }}
  >
    <Heading
      as="h3"
      fontWeight="normal"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </Box>
);
