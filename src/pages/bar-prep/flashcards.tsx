import { Button, Heading } from '@chakra-ui/core';
import { Flashcard } from '@components/flashcard';
import { PublicLayout } from '@layouts/public';
import React from 'react';
import { Seo } from '@components/seo';

const Flashcards = () => {
  return (
    <PublicLayout>
      <Seo title="Bar Prep Flashcards" />
      <Heading>
        Choose a category
      </Heading>
      <Button>
        Business Associations
      </Button>
      <Button>
        Civil Procedure
      </Button>
      <Button>
        Community Property
      </Button>
      <Button>
        Constitutional Law
      </Button>
      <Button>
        Contracts
      </Button>
      <Button>
        Crimes
      </Button>
      <Button>
        Evidence
      </Button>
      <Button>
        Professional Responsibility
      </Button>
      <Button>
        Real Property
      </Button>
      <Button>
        Remedies
      </Button>
      <Button>
        Torts
      </Button>
      <Button>
        Wills and Trusts
      </Button>
      <Flashcard prompt="yes" answer="no" />
    </PublicLayout>
  );
};

export default Flashcards;
