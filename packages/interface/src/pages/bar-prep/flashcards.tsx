/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Heading, Text } from '@chakra-ui/core';
import {
  FlashcardContainer
} from '@neonlaw/shared-ui/src/components/flashcardContainer';
import { Link } from 'gatsby';
import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';
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
        <Text>
          <Link to="/bar-prep">
            Read about our approach to bar prep.
          </Link>
        </Text>
      </Section>
    </PublicLayout>
  );
};

export default Flashcards;
