import { Button } from '../components/button';
import React from 'react';
import { Section } from './section';
import { Text } from '@chakra-ui/core';
import { decisionTree } from '../components/upwardMobilityQuestions';
import { navigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

export const BeginUpwardMobilityQuestionnaire = () => {
  const basePath = 'upward-mobility';
  const intl = useIntl();
  return (
    <>
      <Section
        title={intl.formatMessage({ id: 'beginUpwardMQ.heading' })}
        titleStyles={{marginTop: '4.5rem'}}
      >
        <Text margin="2em 0">
          {intl.formatMessage({ id: 'beginUpwardMQ.text' })}
        </Text>

        <Button
          flash={true}
          buttonScheme="teal"
          onClick={() => {
            navigate(`/${basePath}/${decisionTree['begin']}`);
          }}
        >
          {intl.formatMessage({ id: 'beginUpwardMQ.beginButton' })}
        </Button>
      </Section>
    </>
  );
};
