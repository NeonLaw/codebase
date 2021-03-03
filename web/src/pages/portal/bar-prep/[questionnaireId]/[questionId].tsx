import { PortalLayout } from '../../../../components/layouts/portalLayout';
import {
  QuestionDetailView
} from '../../../../components/detailViews/questionDetailView';
import { useRouter } from 'next/router';

const QuestionnaireDetailPage = () => {
  const router = useRouter();
  const { questionnaireId, questionId } = router.query;

  return (
    <PortalLayout>
      <QuestionDetailView
        id={questionId}
        questionnaireId={questionnaireId}
        showQuestion={false}
        basePath="/portal/bar-prep"
      />
    </PortalLayout>
  );
};

/* eslint-disable-next-line */
export default QuestionnaireDetailPage;
