import { Box, Container } from '@chakra-ui/react';
import { PortalLayout } from '../../../components/layouts/portalLayout';
import {
  QuestionnaireDetailView
} from '../../../components/detailViews/questionnaireDetailView';
import { useRouter } from 'next/router';

const QuestionnaireDetailPage = () => {
  const router = useRouter();
  const { questionnaireId } = router.query;

  return (
    <PortalLayout>
      <Box height="10em" />
      <Container>
        <QuestionnaireDetailView id={questionnaireId} />
      </Container>
    </PortalLayout>
  );
};

/* eslint-disable-next-line */
export default QuestionnaireDetailPage;
