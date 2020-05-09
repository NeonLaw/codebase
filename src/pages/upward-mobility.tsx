import { Heading, Text } from '@chakra-ui/core';
import { Button } from '@components/button';
import { PublicLayout } from '@layouts/public';
import React from 'react';
import { Router } from '@reach/router';
import { Seo } from '@components/seo';
import {
  UpwardMobilityQuestionnaire
} from '@components/upwardMobilityQuestionnaire';
import { navigate } from 'gatsby';

/* eslint-disable @typescript-eslint/no-unused-vars */
const UpwardMobilityHome = (props) => {
  /* eslint-enable @typescript-eslint/no-unused-vars */
  return (
    <>
      <Seo title="Upward Mobility" />
      <Heading textAlign="center">
        Upward Mobility
      </Heading>
      <Text margin="2em 0">
        Upward mobility refers to the come up, or improving your
        socio-economic situation to a point where you can provide for
        others. No matter where you are today, we can help you take care of
        those you love.
      </Text>
      <Button
        onClick={() => { navigate('/upward-mobility/begin'); }}
      >
        Take Questionnaire
      </Button>
    </>
  );
};

const UpwardMobilityRouter = () => {
  return (
    <PublicLayout>
      <Router>
        <UpwardMobilityQuestionnaire path="/upward-mobility/:questionId" />
        <UpwardMobilityHome path="/upward-mobility" />
      </Router>
    </PublicLayout>
  );
};

export default UpwardMobilityRouter;
