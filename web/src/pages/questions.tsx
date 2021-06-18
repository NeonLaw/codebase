import { Box } from '@chakra-ui/layout';
import { Container } from '@neonlaw/components/src/container';
import { PublicLayout } from '../components/layouts/publicLayout';
import { QuestionTable } from '../components/tables/questionTable';
import { gutters } from '../styles/neonLaw';
import styled from '@emotion/styled';
import { useAllQuestionsQuery } from '../utils/api';
import { useDisclosure } from '@chakra-ui/hooks';

const StyledQuestionsPage = styled.div`
  h1 {
    margin-bottom: ${gutters.small};
  }

  .questions-container {
    margin-bottom: ${gutters.medium};
  }
`;

const QuestionsPage = () => {
  const { onOpen } = useDisclosure();
  const { loading, data, error } = useAllQuestionsQuery();

  return (
    <StyledQuestionsPage>
      <PublicLayout>
        <Container>
          <Box padding="9rem 0 4rem">
            <h1>Questions</h1>
            <div className="questions-container">
              <QuestionTable
                loading={loading}
                data={data}
                error={error}
                onRowClick={() => {
                  onOpen();
                }}
              />
            </div>
          </Box>
        </Container>
      </PublicLayout>
    </StyledQuestionsPage>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default QuestionsPage;
