import { Heading, Text } from '@chakra-ui/core';
import { Button } from '@components/button';
import React from 'react';
import { Seo } from '@components/seo';
import { decisionTree } from '@components/upwardMobilityQuestions';
import { navigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';


export const BeginUpwardMobilityQuestionnaire = () => {
  const basePath = 'upward-mobility';
  const intl = useIntl();
  return (
    <>
      <Seo title="Upward Mobility Questionnaire" />

      <Heading textAlign="center">
        {intl.formatMessage({ id: 'beginUpwardMQ.heading' })}
      </Heading>

      <Text margin="2em 0">
        {intl.formatMessage({ id: 'beginUpwardMQ.text' })}
      </Text>

      <Button
        onClick={() => { navigate(`/${basePath}/${decisionTree['begin']}`); }}>
        {intl.formatMessage({ id: 'beginUpwardMQ.beginButton' })}
      </Button>
    </>
  );
};
