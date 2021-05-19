import { Flex } from '@chakra-ui/react';

export const CardHeader = ({ children, ...rest }) => {
  return (
    <Flex borderBottomWidth="1px" {...rest}>
      {children}
    </Flex>
  );
};
