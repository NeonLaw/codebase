/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, useColorMode } from '@chakra-ui/react';
import { colors, shadows } from '../styles/neonLaw';

import Link from 'next/link';

export const DesktopHalfMobileFullCard = ({ children, to }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      flex={['0 0 100%', '0 0 100%', '0 0 100%', '0 48%']}
      maxWidth="600px"
      display="inline-block"
      cursor={'pointer'}
      className="outline-bordered"
      margin={['1em 0', '1em 0', '2em 0']}
      background={colors.background[colorMode]}
      borderColor={colors.borders[colorMode]}
      boxShadow={shadows.light2}
    >
      <Box
        as={Link}
        href={to}
        passHref
      >
        <Box
          as="a"
          className="desktop-half-mobile-full-card-link"
          textDecoration="none"
          _hover={{color: 'inherit'}}
          _focus={{color: 'inherit'}}
        >{children}</Box>
      </Box>
    </Box>
  );
};
