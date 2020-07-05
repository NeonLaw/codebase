import { Button, Heading } from '@chakra-ui/core';
import { Flashcard } from '@components/flashcard';
import { Location } from '@reach/router';
import { PublicLayout } from '@layouts/publicLayout';
import React from 'react';
import { Seo } from '@components/seo';
import { flashcardTopics } from '@forms/options/flashcardTopics';
import { navigate } from 'gatsby-plugin-intl';
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
            <Heading textAlign="center">
              Choose a category
            </Heading>
            {flashcardTopics.map((topic, i) => (
              <Button
                key={i}
                onClick={() => {
                  navigate(`${location.pathname}?topic=${topic.value}`);
                }}
              >
                {topic.label}
              </Button>
            ))}
            <Flashcard topic={topic} />
          </PublicLayout>
        );
      }}
    </Location>
  );
};

export default Flashcards;
