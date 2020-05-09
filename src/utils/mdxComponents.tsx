/* eslint-disable react/display-name */
import {
  Alert,
  AlertIcon,
  AspectRatioBox,
  Box,
  Callout,
  Code,
  Flex,
  Heading,
  Kbd,
  PseudoBox,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import { CodeBlock } from '@components/codeBlock';
import {
  DesktopHalfMobileFullCard
} from '@components/desktopHalfMobileFullCard';
import { Link } from '@components/link';
import { PublicLayout } from '@layouts/public';
import React from 'react';
import { colors } from '@themes/neonLaw';
import { navigate } from 'gatsby-plugin-intl';

const Pre = props => <Box my="2em" rounded="sm" {...props} />;

const Table = props => (
  <Box as="table" textAlign="left" mt="32px" width="full" {...props} />
);

const THead = props => {
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

const TData = props => (
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

const UnderlineLink = (props) => {
  const { colorMode } = useColorMode();

  return (
    <PseudoBox
      as="span"
      color={colors.link[colorMode]}
      cursor="pointer"
      textDecoration="underline"
      outline="none"
      _hover={{ opacity: 0.8 }}
      _focus={{ boxShadow: 'outline' }}
      {...props}
    />
  );
};


export const MDXComponents = {
  Alert,
  AlertIcon,
  AspectRatioBox,
  Box,
  DesktopHalfMobileFullCard,
  Flex,
  Link,
  PublicLayout,
  Text,
  a: ({ href, ...props }) => {
    const httpRegex = new RegExp('^http');
    const telRegex = new RegExp('^tel');
    const mailRegex = new RegExp('^mail');
    if (httpRegex.test(href)) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <UnderlineLink {...props} />
        </a>
      );
    }
    if (telRegex.test(href)) {
      return (
        <a href={href}>
          <UnderlineLink  {...props} />
        </a>
      );
    }
    if (mailRegex.test(href)) {
      return (
        <a href={href}>
          {props.children}
        </a>
      );
    }
    return (
      <Link to={href}>
        <UnderlineLink {...props} />
      </Link>
    );
  },
  blockquote: props => (
    <Callout
      mt={4}
      variant="left-accent"
      status="warning"
      css={{ '> *:first-of-type': { marginTop: 0 } }}
      {...props}
    />
  ),
  br: props => <Box height="24px" {...props} />,
  code: CodeBlock,
  h1: props => (
    <Heading
      as="h1"
      size="xl"
      margin="1em 0"
      textAlign="center"
      {...props}
    />),
  h2: props => (
    <Heading
      as="h2"
      fontWeight="semibold"
      size="lg"
      margin="1em 0"
      textAlign="center"
      {...props}
    />
  ),
  h3: props => (
    <Heading
      as="h3"
      size="md"
      margin="1em 0"
      textAlign="center"
      fontWeight="medium"
      {...props}
    />
  ),
  hr: props => <Box as="hr" borderTopWidth="1px" my={8} {...props} />,
  inlineCode: props => (
    <Code
      color="black"
      backgroundColor="black"
      fontSize="0.84em"
      {...props} />
  ),
  kbd: Kbd,
  li: props => <Box as="li" pb="4px" {...props} />,
  navigate,
  ol: props => <Box as="ol" pt="8px" pl="16px" {...props} />,
  p: props => (
    <Text as="p" mt={4} lineHeight="tall" {...props} />
  ),
  pre: Pre,
  table: Table,
  td: TData,
  th: THead,
  ul: props => <Box as="ul" pt="8px" pl="16px" {...props} />,
};

