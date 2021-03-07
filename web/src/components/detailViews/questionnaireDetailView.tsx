import { Button, Skeleton } from '@chakra-ui/react';
import Link from 'next/link';
import { useQuestionnaireByIdQuery } from '../../utils/api';

export const QuestionnaireDetailView = ({ id }) => {
  const { data, loading } = useQuestionnaireByIdQuery(
    { variables: { id }}
  );
  if (loading)  {
    return <Skeleton height="20px" />;
  }

  if (data) {
    const questionId = data.questionnaire?.questionTree.begin;

    return (
      <>
        <h1>{data?.questionnaire?.name}</h1>

        <Link href={`${id}/${questionId}`}>
          <Button>
            Begin Questionnaire
          </Button>
        </Link>
      </>
    );
  }

  return null;
};
