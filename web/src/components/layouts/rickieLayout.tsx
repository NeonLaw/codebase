import { Box, Flex, useColorMode } from '@chakra-ui/react';
import { BaseFooter } from '../footer/baseFooter';
import { Container } from '../container';
import {
  RickieNavigationBar
} from '../navigationBars/rickieNavigationBar';
import { colors } from '../../styles/neonLaw';

export const RickieLayout = ({
  children,
  isBgLighter,
  isFooterWhite
}: {
  children: JSX.Element | JSX.Element[];
  currentSite?: string;
  isBgLighter?: boolean;
  isFooterWhite?: boolean;
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colors.background[colorMode]}
      color={colors.text[colorMode]}
    >
      <Flex
        minHeight="100vh"
        direction="column"
        background={isBgLighter ? colors.lighterBg[colorMode] : 'inherit'}
      >
        <>
          <RickieNavigationBar />
          <Box height="7em" />
          <Container>
            <Box flex={1}>
              <main role="main">{children}</main>
            </Box>
          </Container>
        </>
        <BaseFooter
          isWhite={isFooterWhite}
          footerHeader='footer.justice_for_rickie_slaughter.heading'
          footerText='footer.justice_for_rickie_slaughter.text'
        />
      </Flex>
    </Box>
  );
};
