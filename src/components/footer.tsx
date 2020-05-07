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
import {
  FaFacebookF, FaLinkedinIn, FaMailchimp, FaTwitter
} from 'react-icons/fa';
import { Button } from '@components/button';
import { LanguageDropdown } from '@components/languageDropdown';
import { Link } from 'gatsby';
import React from 'react';

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = { dark: 'white', light: 'black' };
  const bg = { dark: 'black', light: 'gray.300' };
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };

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
          The Upward Mobility Law Firm
        </Heading>
        <Text
          padding="1em"
          maxWidth="1024px"
          margin="0 auto"
          textAlign="center"
        >
          All content presented herein is for informational purposes only.
          Nothing should be construed as legal advice. Transmission and receipt
          of this information is not intended to create and does not
          constitute, an attorney-client relationship with lawyers on this
          platform. There is no expectation of attorney-client privilege or
          confidentiality of anything you may communicate to us in this forum.
          Do not act upon any information presented without seeking
          professional counsel.
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
          <Box display={['block', 'block', 'none']} mb="7px">
            <Button>
              <a
                href="https://www.twitter.com/neonlaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="@Neon Law on Twitter"
              >
                <FaTwitter style={{ display: 'inline' }} />
              </a>
            </Button>
            <Button>
              <a
                href="https://www.facebook.com/neonlaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neon Law Facebook page"
              >
                <FaFacebookF style={{ display: 'inline' }} />
              </a>
            </Button>
            <Button>
              <a
                href="https://www.linkedin.com/company/neon-law"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neon Law LinkedIn page"
              >
                <FaLinkedinIn style={{ display: 'inline' }} />
              </a>
            </Button>
            <Button>
              <a
                href="https://mailchi.mp/f364242f585f/neonlaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neon Law Monthly - an Email Newsletter"
              >
                <FaMailchimp style={{ display: 'inline' }} />
              </a>
            </Button>
          </Box>
          <Box as={Link} to="/about-us" padding="7px 0">
            About Us
          </Box>
          <Box as={Link} to="/pro-bono" padding="7px 0">
            Pro Bono
          </Box>
          <Box
            as="a"
            href="https://neonlaw.zendesk.com/"
            target="_blank"
            rel="noopener noreferrer"
            padding="7px 0"
          >
            Support
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
            Practice Areas
          </Box>
          <Box as={Link} to="/privacy-policy" padding="7px 0">
            Privacy Policy
          </Box>
          <Box as={Link} to="/terms-of-service" padding="7px 0">
            Terms of Service
          </Box>
        </Flex>
        <Flex direction="column">
          <LanguageDropdown />
          <Text onClick={toggleColorMode} cursor="pointer" padding="7px 0">
            Switch to {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
          </Text>
          <Flex
            flexDirection="row"
            display={['none', 'none', 'block']}
            justifyContent="space-between"
          >
            <Button>
              <a
                href="https://www.twitter.com/neonlaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="@Neon Law on Twitter"
              >
                <FaTwitter style={{ display: 'inline' }} />
              </a>
            </Button>
            <Button>
              <a
                href="https://www.facebook.com/neonlaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neon Law Facebook page"
              >
                <FaFacebookF style={{ display: 'inline' }} />
              </a>
            </Button>
            <Button>
              <a
                href="https://www.linkedin.com/company/neon-law"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neon Law LinkedIn page"
              >
                <FaLinkedinIn style={{ display: 'inline' }} />
              </a>
            </Button>
            <Button>
              <a
                href="https://mailchi.mp/f364242f585f/neonlaw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neon Law Monthly - an Email Newsletter"
              >
                <FaMailchimp style={{ display: 'inline' }} />
              </a>
            </Button>
          </Flex>
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
