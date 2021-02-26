import { Box } from '@chakra-ui/react';
import { Container } from '../../../components/container';
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
      <Box height="8em" />
      <Container>
        <QuestionDetailView
          id={questionId}
          questionnaireId={questionnaireId}
          showQuestion={false}
        />
      </Container>
      <Box height="5em" />
    </PublicLayout>
  );
};

/* eslint-disable-next-line */
export default QuestionnaireDetailPage;
