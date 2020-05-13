/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { LanguageDropdown } from '@components/languageDropdown';
import { Link } from '@components/link';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { SocialMediaIcons } from '@components/socialMediaIcons';

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = { dark: 'white', light: 'black' };
  const bg = { dark: 'black', light: 'gray.300' };
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };
  const intl = useIntl();
  return (
    <Box
      bg={lighterBg[colorMode]}
      color={color[colorMode]}
      width="100%"
      textAlign="left"
      as="footer"
    >
      <Box padding="2em 0">
        <Heading
          as="div"
          size="lg"
          textAlign="center"
          fontWeight="medium"
        >
          {intl.formatMessage({ id: 'footer.heading' })} 
        </Heading>
        <Text
          padding="1em"
          maxWidth="1024px"
          margin="0 auto"
          textAlign="center"
        >
          {intl.formatMessage({ id: 'footer.text' })}
        </Text>
      </Box>
      <Flex
        direction={['column', 'column', 'row']}
        padding="2em 1em"
        justifyContent="space-between"
        textAlign={['center', 'center', 'left']}
        bg={bg[colorMode]}
        fontSize="lg"
      >
        <Flex direction="column">
          <SocialMediaIcons display={['block', 'block', 'none']} mb="7px" />
          <Box as={Link} to="/about-us" padding="7px 0">
            {intl.formatMessage({ id: 'footer.about' })}
          </Box>
          <Box as={Link} to="/pro-bono" padding="7px 0">
            {intl.formatMessage({ id: 'footer.probono' })}
          </Box>
          <Box
            as="a"
            href="https://neonlaw.zendesk.com/"
            target="_blank"
            rel="noopener noreferrer"
            padding="7px 0"
          >
            {intl.formatMessage({ id: 'footer.support' })} 
          </Box>
          <Box
            display={['none', 'none', 'block']}
            padding="7px 0"
            as={Link}
            to="/"
          >
            Copyright &copy; {new Date().getFullYear()} Shook Law PLLC
          </Box>
        </Flex>
        <Flex direction="column">
          <Box as={Link} to="/practice-areas" padding="7px 0">
            {intl.formatMessage({ id: 'footer.practice_areas' })}
          </Box>
          <Box as={Link} to="/privacy-policy" padding="7px 0">
            {intl.formatMessage({ id: 'footer.privacy_Policy' })}
          </Box>
          <Box as={Link} to="/terms-of-service" padding="7px 0">
            {intl.formatMessage({ id: 'footer.terms' })}
          </Box>
        </Flex>
        <Flex direction="column">
          <LanguageDropdown />
          <Text onClick={toggleColorMode} cursor="pointer" padding="7px 0">
            {intl.formatMessage({ id: 'footer.switch' })} {`${colorMode=== 'dark' ? 
            intl.formatMessage({ id: 'footer.light' })  : 
            intl.formatMessage({ id: 'footer.dark' }) }`} {intl.formatMessage({ id: 'footer.mode' })}
          </Text>
          <SocialMediaIcons display={['none', 'none', 'block']} />
          <Box
            display={['block', 'block', 'none']}
            as={Link}
            to="/"
            padding="7px 0"
          >
            Copyright &copy; {new Date().getFullYear()} Shook Law PLLC
          </Box>
        </Flex>
        <Box display={['none', 'none', 'flex']} />
      </Flex>
    </Box>
  );
};
