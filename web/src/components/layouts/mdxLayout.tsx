import { Box, Divider, Flex, Heading, useColorMode } from '@chakra-ui/react';
import React, { ReactChildren } from 'react';
import { colors, gutters } from '../../styles/neonLaw';
import { BaseFooter } from '../footer/baseFooter';
import { Breadcrumbs } from '../breadcrumbs';
import { Container } from '../container';
import { EditOnGithub } from '../editOnGithub';
import { Image } from '../image';
import { MDXComponents } from '../mdxComponents';
import { MDXProvider } from '@mdx-js/react';
import {
  PublicNavigationBar
} from '../navigationBars/publicNavigationBar';
import { Seo } from '../seo';
import { ShareButtons } from '../shareButtons';

export const MdxLayout: React.FC<{
  chlidren: ReactChildren;
  meta: any;
}> = ({ children, meta }) => {
  const { title, slug, filename, featuredImage, description } = meta;
  const { colorMode } = useColorMode();
  const widescreen = 'false';

  return (
    <Flex minHeight="100vh" direction="column">
      <Seo title={title} image={featuredImage} description={description} />
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
                <EditOnGithub filename={filename} />
              </Flex>
            </Container>
          </Box>
        </Box>
      </>
      <BaseFooter isWhite={true} />
    </Flex>
  );
};
