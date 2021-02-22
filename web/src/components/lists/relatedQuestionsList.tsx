import { Box, Heading, List, ListIcon, ListItem } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

export const RelatedQuestionsList = ({
  relatedQuestions,
  questionnaireId,
}) => {
  const router = useRouter();

  return (
    <Box borderWidth="1px" padding="5px">
      <Heading textAlign="center" padding="2px">
        Related Questions
      </Heading>
      <List spacing={3}>
        {relatedQuestions.map((question, i) => (
          <ListItem
            key={i}
            padding={1}
            cursor="pointer"
            _hover={{ bg: 'teal.600', color: 'white' }}
            onClick={() => {
              router.push(
                `/questionnaires/${questionnaireId}/${question.id}`
              );
            }}
          >
            <ListIcon as={CheckIcon} />
            {question.prompt}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
