import { Box } from '@chakra-ui/react';

export const Container = ({
  children,
  isFullBleed = false
}: {children: JSX.Element | JSX.Element[]; isFullBleed?: any}) => (
  <Box
    maxWidth={!isFullBleed ? 'var(--grid-max-width)' : 'auto'}
    margin="auto"
    width={!isFullBleed ? ['95%', '95%', '90%'] : []}
  >
    {children}
  </Box>
);

