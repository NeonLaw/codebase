import { Box, Container } from '@chakra-ui/react';
import { PublicLayout } from '../../../components/layouts/publicLayout';
import {
  QuestionDetailView
} from '../../../components/detailViews/questionDetailView';
import { useRouter } from 'next/router';

const QuestionnaireDetailPage = () => {
  const router = useRouter();
  const { questionnaireId } = router.query;

  return (
    <PublicLayout>
      <Box height="10em" />
      <Container>
        <QuestionDetailView id={questionnaireId} />
      </Container>
    </PublicLayout>
  );
};

/* eslint-disable-next-line */
export default QuestionnaireDetailPage;
