import { Box, Container } from '@chakra-ui/react';

import { PublicLayout } from '../../layouts/publicLayout';
import {
  QuestionnaireDetailView
} from '../../components/detailViews/questionnaireDetailView';
import { useRouter } from 'next/router';

const QuestionnaireDetailPage = () => {
  const router = useRouter();
  const { questionnaireId } = router.query;

  return (
    <PublicLayout>
      <Box height="10em" />
      <Container>
        <QuestionnaireDetailView id={questionnaireId} />
      </Container>
    </PublicLayout>
  );
};

/* eslint-disable-next-line */
export default QuestionnaireDetailPage;
