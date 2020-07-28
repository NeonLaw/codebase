import { Heading, List, ListItem, Text } from '@chakra-ui/core';

import React from 'react';
import { Section } from './section';
import { questions } from '../components/upwardMobilityQuestions';
import { useIntl } from 'gatsby-plugin-intl';

export const FinishUpwardMobilityQuestionnaire = () => {
  const intl = useIntl();
  const savedAnswers: any = JSON.parse(
    (localStorage.getItem('upwardMobility.answers') as any) || {}
  );
  const answeredQuestionIds: string[] = Object.keys(savedAnswers);

  const answers = questions.reduce((accumulator, question) => {
    if (answeredQuestionIds.includes(question.id)) {
      const answer = savedAnswers[question.id];
      const prompt = question.prompt;

      accumulator.push({ answer, prompt });
      return accumulator;
    }

    return accumulator;
  }, [] as any[]);

  return (
    <>
      <Section>
        <Heading as="h3" fontWeight="normal" marginTop="4.5rem">
          {intl.formatMessage({ id: 'finishUpwardMQ.heading' })}
        </Heading>

        <Text margin="2em 0">
          {intl.formatMessage({ id: 'finishUpwardMQ.text' })}
        </Text>

        <List>
          {answers.map((question, i) => (
            <ListItem key={i} margin="2em 0">
              <Text>{question.prompt}</Text>
              <Text>
                Answer:{' '}
                <span style={{ fontWeight: 500 }}>{question.answer}</span>
              </Text>
            </ListItem>
          ))}
        </List>
      </Section>
    </>
  );
};
