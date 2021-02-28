import { Center, Heading, theme } from '@chakra-ui/react';

import { GetLayoutDirection } from '../../../utils/getLayoutDirection';
import React from 'react';
import { useRouter } from 'next/router';

export interface HelpWithProps {
  text: string;
  image: string;
  path: string;
}

export const HelpWith = ({ image, text, path }: HelpWithProps) => {
  const router = useRouter();
  const dir = GetLayoutDirection();

  return (
    <Center
      onClick={() => { router.push(path);}}
      position="relative"
      padding="5rem 3rem"
      display="block"
      cursor="pointer"
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
        left: dir === 'rtl' ? '100%' : 0,
        opacity: 0,
        position: 'absolute',
        right: dir === 'rtl' ? 0 : '100%',
        top: 0,
        transition: 'all .3s ease-in',
        width: '0%',
      }}
      _hover={{
        '&:after': {
          left: '0',
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
    </Center>
  );
};
