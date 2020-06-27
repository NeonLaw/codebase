import { Button, Heading } from '@chakra-ui/core';
import { Flashcard } from '@components/flashcard';
import { Location } from '@reach/router';
import { PublicLayout } from '@layouts/public';
import React from 'react';
import { Seo } from '@components/seo';
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
            <Button
              onClick={() => {
                navigate(`${location.pathname}?topic=business-associations`);
              }}
            >
              Business Associations
            </Button>
            <Button
              onClick={() => {
                navigate(`${location.pathname}?topic=civil-procedure`);
              }}
            >
              Civil Procedure
            </Button>
            <Button
              onClick={() => {
                navigate(`${location.pathname}?topic=community-property`);
              }}
            >
              Community Property
            </Button>
            <Button
              onClick={() => {
                navigate(`${location.pathname}?topic=constitutional-law`);
              }}
            >
              Constitutional Law
            </Button>
            <Button
              onClick={() => {
                navigate(`${location.pathname}?topic=contracts`);
              }}
            >
              Contracts
            </Button>
            <Button
              onClick={() => {
                navigate(`${location.pathname}?topic=crimes`);
              }}
            >
              Crimes
            </Button>
            <Button
              onClick={() => {
                navigate(`${location.pathname}?topic=evidence`);
              }}
            >
              Evidence
            </Button>
            <Button
              onClick={() => {
                navigate(
                  `${location.pathname}?topic=professional-responsibility`
                );
              }}
            >
              Professional Responsibility
            </Button>
            <Button
              onClick={() => {
                navigate(`${location.pathname}?topic=real-property`);
              }}
            >
              Real Property
            </Button>
            <Button
              onClick={() => {
                navigate(`${location.pathname}?topic=remedies`);
              }}
            >
              Remedies
            </Button>
            <Button
              onClick={() => { navigate(`${location.pathname}?topic=torts`); }}
            >
              Torts
            </Button>
            <Button
              onClick={() => {
                navigate(`${location.pathname}?topic=wills-and-trusts`);
              }}
            >
              Wills and Trusts
            </Button>
            <Flashcard topic={topic} />
          </PublicLayout>
        );
      }}
    </Location>
  );
};

export default Flashcards;
