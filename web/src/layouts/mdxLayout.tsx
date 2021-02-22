import { Box, Divider, Flex, Heading, useColorMode } from '@chakra-ui/react';
import React, { ReactChildren } from 'react';
import { colors, gutters } from '../styles/neonLaw';

import { ApolloProvider } from '@apollo/client';
import { BaseFooter } from '../components/footer/baseFooter';
import { Breadcrumbs } from '../components/breadcrumbs';
import { Container } from '../components/container';
import { EditOnGithub } from '../components/editOnGithub';
import { Image } from '../components/image';
import { MDXComponents } from '../components/mdxComponents';
import { MDXProvider } from '@mdx-js/react';
import {
  PublicNavigationBar
} from '../components/navigationBars/publicNavigationBar';
import { Seo } from '../components/seo';
import { ShareButtons } from '../components/shareButtons';
import { getApolloClient } from '../utils/getApolloClient';

export const MdxLayout: React.FC<{
  chlidren: ReactChildren;
  meta: any;
}> = ({ children, meta }) => {
  const { title, slug, featuredImage, description } = meta;
  const { colorMode } = useColorMode();
  const widescreen = 'false';
  const apolloClient = getApolloClient();

  return (
    <Flex minHeight="100vh" direction="column">
      <Seo title={title} image={featuredImage} description={description} />
      <ApolloProvider client={apolloClient}>
        <>
          <PublicNavigationBar />
          <Box
            background={colors.lighterBg[colorMode]}
            color={colors.text[colorMode]}
          >
            <Box
              as="main"
              aria-label="Main Content"
              flex={1}
              padding="9rem 0 4rem"
            >
              <Container>
                <Breadcrumbs />
                <Heading
                  as="h1"
                  fontSize="xl"
                  marginBottom={gutters.xSmall}
                  fontWeight="400"
                >
                  {title}
                </Heading>
                {featuredImage && (
                  <Box borderWidth="1px" rounded="lg" overflow="hidden">
                    <Image
                      src={featuredImage}
                      alt={title}
                      aspectRatio={widescreen ? 2 : 16 / 9}
                    />
                  </Box>
                )}
                <MDXProvider components={MDXComponents}>
                  {children}
                </MDXProvider>
                <Divider margin="1em 0" />
                <Flex width="100%" justifyContent="space-between">
                  <ShareButtons slug={slug} siteUrl="https://www.neonlaw.com" />
                  <EditOnGithub app="interface" path={slug} />
                </Flex>
              </Container>
            </Box>
          </Box>
        </>
      </ApolloProvider>
      <BaseFooter isWhite={true} />
    </Flex>
  );
};
