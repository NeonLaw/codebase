/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, useColorMode } from '@chakra-ui/react';
import { colors, shadows } from '../styles/neonLaw';

import Link from 'next/link';
import styled from '@emotion/styled';

const ContentWrapper = styled.a`
  text-decoration: none;
  img {
    max-height: 350px;
    object-fit: cover;
  }

  &:hover,
  &:focus {
    color: inherit;
  }
`;

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
        <ContentWrapper>{children}</ContentWrapper>
      </Box>
    </Box>
  );
};
