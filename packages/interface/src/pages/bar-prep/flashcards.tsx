/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Button, Heading } from '@chakra-ui/core';
import { gutters, sizes } from '@neonlaw/shared-ui/src/themes/neonLaw';

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
              <Box
                display="grid"
                gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
                gridGap={gutters.xSmallOne}
                margin={`${gutters.xSmallOne} 0`}
                maxW={sizes.textContainerSmall}>
                {flashcardTopics.map((topic, i) => (
                  <Button
                    key={i}
                    as={Link}
                    to={`${location.pathname}?topic=${topic.value}`}
                    activeLink={{ backgroundColor: 'red' }}
                  >
                    {topic.label}
                  </Button>
                ))}
              </Box>
              <FlashcardContainer topic={topic} />
            </Section>
          </PublicLayout>
        );
      }}
    </Location >
  );
};

export default Flashcards;
