import { Heading, PseudoBox, theme } from '@chakra-ui/core';

import { Link } from '@neonlaw/shared-ui/src/components/link';
import React from 'react';

export interface HelpWithProps {
  text: string | JSX.Element;
  image: string;
}

export const HelpWith = ({ image, text }: HelpWithProps) => (
  <PseudoBox
    as={Link}
    to="#"
    position="relative"
    padding="5rem 3rem"
    display="block"
    background={`linear-gradient(rgba(0, 0, 0, 0.45), rgba(0,0,0, 1)), url(${image})`}
    backgroundSize="cover"
    backgroundPosition="center"
    color={theme.colors.white}
    textAlign="center"
    _after={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: '100%',
      content: '""',
      display: 'block',
      height: '100%',
      width: '0%',
      background: 'cyan',
      opacity: 0,
      transition: 'all .3s ease-in',
    }}
    _hover={{
      '&:after': {
        right: '0',
        opacity: '.2',
        width: '100%',
      },
    }}
    _focus={{
      '&:after': {
        right: '0',
        opacity: '.2',
        width: '100%',
      },
    }}
  >
    <Heading as="h3">{text}</Heading>
  </PseudoBox>
);
