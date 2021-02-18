import { useRouter } from 'next/router';

const QuestionnaireDetailView = () => {
  const router = useRouter();
  const { questionnaireId } = router.query;

  return <p>Questionnaire: {questionnaireId}</p>;
};

/* eslint-disable-next-line */
export default QuestionnaireDetailView;
