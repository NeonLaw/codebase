import { Box, useColorMode } from '@chakra-ui/react';
import { BaseFooter } from '../footer/baseFooter';
import { DeleteYourDataStyles } from '../../styles/deleteYourDataStyles';
import React from 'react';
import { colors } from '../../styles/deleteYourData';

export const DeleteYourDataLayout = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <DeleteYourDataStyles />
      <>
        <Box color={colorMode === 'dark' ? colors.white : ''}>
          {children}
        </Box>
        <BaseFooter isWhite={true} />
      </>
    </>
  );
};
