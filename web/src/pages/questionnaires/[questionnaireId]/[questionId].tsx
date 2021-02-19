import { Box, Button } from '@chakra-ui/react';
import { Container } from '../../../components/container';
import Link from 'next/link';
import { PublicLayout } from '../../../components/layouts/publicLayout';
import {
  QuestionDetailView
} from '../../../components/detailViews/questionDetailView';
import { useRouter } from 'next/router';

const QuestionnaireDetailPage = () => {
  const router = useRouter();
  const { questionnaireId, questionId } = router.query;

  return (
    <PublicLayout>
      <Box height="10em" />
      <Container>
        <QuestionDetailView id={questionId} questionnaireId={questionnaireId} />

        <Link href={`${questionnaireId}/${questionId}`}>
          <Button>
            Next Question
          </Button>
        </Link>
      </Container>
    </PublicLayout>
  );
};

/* eslint-disable-next-line */
export default QuestionnaireDetailPage;
