/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  FlashcardContainer
} from '@neonlaw/shared-ui/src/components/flashcardContainer';
import { Heading } from '@chakra-ui/core';
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
      </Section>
    </PublicLayout>
  );
};

export default Flashcards;
