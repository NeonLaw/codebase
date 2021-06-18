import { Box } from '@chakra-ui/react';
import { Container } from '@neonlaw/components';
import { PublicLayout } from '../../components/layouts/publicLayout';
import { Seo } from '../../components/seo';
import { useRouter } from 'next/router';

const QuestionScreen = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PublicLayout isBgLighter={true}>
      <Seo title="Question" />
      <Box
        as="main"
        aria-label="Main Content"
        flex={1}
        padding="9rem 0 4rem"
      >
        <Container>
          <>
            Question {id}. More coming soon, contact us for details!
          </>
        </Container>
      </Box>
    </PublicLayout>
  );
};

// eslint-disable-next-line import/no-default-export
export default QuestionScreen;
