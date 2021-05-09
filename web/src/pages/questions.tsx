import { gql, useQuery } from '@apollo/client';

import { Box } from '@chakra-ui/layout';
import { Container } from '../components/container';
import { PublicLayout } from '../components/layouts/publicLayout';
import { QuestionTable } from '../components/tables/questionTable';
import React from 'react';
import { useDisclosure } from '@chakra-ui/hooks';

const QUERY = gql`
  query Questions {
    questions {
      nodes {
        id
        prompt
      }
    }
  }
`;

const QuestionsPage = () => {
  const { onOpen } = useDisclosure();
  const { loading, data, error } = useQuery(QUERY);

  return (
    <PublicLayout>
      <Container>
        <Box padding="9rem 0 4rem">
          <h1>Questions</h1>
          <QuestionTable
            loading={loading}
            data={data}
            error={error}
            onRowClick={() => {
              onOpen();
            }}
          />
        </Box>
      </Container>
    </PublicLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default QuestionsPage;
