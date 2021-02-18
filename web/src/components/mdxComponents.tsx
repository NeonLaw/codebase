/* eslint-disable react/display-name */
import {
  Alert,
  AlertIcon,
  AspectRatio,
  Box,
  Code,
  Flex,
  Heading,
  Kbd,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { CodeBlock } from '../components/codeBlock';
import { DesktopHalfMobileFullCard } from './desktopHalfMobileFullCard';
import { default as Link } from 'next/link';
import React from 'react';
import { colors } from '../styles/neonLaw';

const Pre = (props) => <Box my="2em" rounded="sm" {...props} />;

const Table = (props) => (
  <Box as="table" textAlign="left" mt="32px" width="full" {...props} />
);

const THead = (props) => {
  const { colorMode } = useColorMode();
  const bg = { dark: 'whicyanpha.100', light: 'gray.50' };
  return (
    <Box
      as="th"
      bg={bg[colorMode]}
      fontWeight="semibold"
      p={2}
      fontSize="sm"
      {...props}
    />
  );
};

const TData = (props) => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

export const UnderlineLink = ({ href, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as={Link}
      color={colors.link[colorMode]}
      cursor="pointer"
      textDecoration="underline"
      outline="none"
      _hover={{ opacity: 0.8 }}
      _focus={{ boxShadow: 'outline' }}
      href={href}
      {...props}
    />
  );
};

export const MDXComponents = {
  Alert,
  AlertIcon,
  AspectRatio,
  Box,
  DesktopHalfMobileFullCard,
  Flex,
  Text,
  a: ({ href, ...props }) => {
    const outsideLink = new RegExp('(^http|^/audio|^/pdf)');
    const telRegex = new RegExp('^tel');
    const mailRegex = new RegExp('^mail');
    if (outsideLink.test(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: 'pointer', textDecoration: 'underline' }}
        >
          {props.children}
        </a>
      );
    }
    if (telRegex.test(href)) {
      return (
        <a
          href={href}
          style={{ cursor: 'pointer', textDecoration: 'underline' }}

        >
          {props.children}
        </a>
      );
    }
    if (mailRegex.test(href)) {
      return <a href={href}>{props.children}</a>;
    }
    return (
      <UnderlineLink href={href} {...props} />
    );
  },
  blockquote: (props) => (
    <Alert
      mt={4}
      variant="left-accent"
      status="warning"
      css={{ '> *:first-of-type': { marginTop: 0 } }}
      {...props}
    />
  ),
  br: (props) => <Box height="24px" {...props} />,
  code: CodeBlock,
  h1: (props) => <Heading as="h1" size="xl" margin="1em 0" {...props} />,
  h2: (props) => (
    <Heading
      as="h2"
      fontWeight="normal"
      fontSize="xl1"
      margin="1em 0 .5em"
      {...props}
    />
  ),
  h3: (props) => (
    <Heading as="h3" margin="1em 0 .5em" fontWeight="normal" {...props} />
  ),
  hr: (props) => <Box as="hr" borderTopWidth="1px" my={8} {...props} />,
  inlineCode: (props) => (
    <Code color="black" backgroundColor="black" fontSize="0.84em" {...props} />
  ),
  kbd: Kbd,
  li: (props) => <Box as="li" pb="4px" {...props} />,
  ol: (props) => <Box as="ol" pt="8px" pl="16px" {...props} />,
  p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  pre: Pre,
  table: Table,
  td: TData,
  th: THead,
  ul: (props) => <Box as="ul" pt="8px" pl="16px" {...props} />,
};
