import { Box, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { TrustFooter } from '../footer/trustFooter';
import { colors } from '../../styles/neonLaw';

export const PublicTrustLayout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        bg={colors.background[colorMode]}
        color={colors.text[colorMode]}
        paddingBottom="2em"
      >
        {children}
      </Box>
      <TrustFooter />
    </>
  );
};
