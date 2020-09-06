/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Button, Heading } from '@chakra-ui/core';
import { colors, gutters, sizes } from '@neonlaw/shared-ui/src/themes/neonLaw';

import {
  FlashcardContainer
} from '@neonlaw/shared-ui/src/components/flashcardContainer';
import { Link } from 'gatsby-plugin-intl';
import { Location } from '@reach/router';
import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';
import { Seo } from '../../components/seo';
import {
  flashcardTopics
} from '@neonlaw/shared-ui/src/forms/options/flashcardTopics';
import queryString from 'query-string';

const Flashcards = () => {
  return (
    <Location>
      {({ location }) => {
        const search = location.search ?
          queryString.parse(location.search) :
          {};
        const topicSearchParam = search.topic || 'wills-and-trusts';
        const topic: string = Array.isArray(topicSearchParam) ?
          topicSearchParam[0] :
          topicSearchParam;

        return (
          <PublicLayout>
            <Seo title="Bar Prep Flashcards" />

            <Section>
              <Heading fontWeight="normal">
                Choose a category
              </Heading>
              <FlashcardContainer topic={topic} />
              <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fill, minmax(220px, 1fr))"
                gridGap={gutters.xSmallOne}
                margin={`${gutters.xSmallOne} 0`}
                maxW={sizes.textContainerMediumOne}>
                {flashcardTopics.map((topic, i) => (
                  <Button
                    key={i}
                    bg={
                      topicSearchParam === topic.value ?
                        colors.cyanLight :
                        colors.cyanDark
                    }
                    color={colors.text.dark}
                    _hover={{ backgroundColor: colors.cyanDark1 }}
                    as={Link}
                    to={`${location.pathname}?topic=${topic.value}`}
                  >
                    {topic.label}
                  </Button>
                ))}
              </Box>
            </Section>
          </PublicLayout>
        );
      }}
    </Location >
  );
};

export default Flashcards;
