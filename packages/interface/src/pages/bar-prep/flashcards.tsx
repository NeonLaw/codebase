/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Heading, Text } from '@chakra-ui/core';
import {
  FlashcardContainer
} from '../../components/flashcardContainer';
import { Link } from 'gatsby';
import { PublicLayout } from '../../layouts/publicLayout';
import React from 'react';
import { Section } from '../../components/section';
import { Seo } from '../../components/seo';

const Flashcards = () => {
  return (
    <PublicLayout>
      <Seo title="Bar Prep Flashcards" />

      <Section>
        <Heading fontWeight="normal" data-testid="flashcards-heading">
          Bar Prep Flashcards
        </Heading>
        <FlashcardContainer />
        <Text textDecoration="underline">
          <Link to="/bar-prep">
            Read about our approach to bar prep.
          </Link>
        </Text>
      </Section>
    </PublicLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default Flashcards;
