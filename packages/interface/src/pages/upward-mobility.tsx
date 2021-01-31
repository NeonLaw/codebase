import { Button } from '@neonlaw/shared-ui/src/components/button';
import { PublicLayout } from '../layouts/publicLayout';
import React from 'react';
import { Router } from '@reach/router';
import { Section } from '../components/section';
import { Seo } from '../components/seo';
import { Text } from '@chakra-ui/core';
import {
  UpwardMobilityQuestionnaire
} from '../components/upwardMobilityQuestionnaire';
import { navigate } from 'gatsby-plugin-intl';
import { useIntl } from 'gatsby-plugin-intl';

/* eslint-disable @typescript-eslint/no-unused-vars */
const UpwardMobilityHome = (props) => {
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const intl = useIntl();
  return (
    <>
      <Seo title="Upward Mobility" />
      <Section
        title={intl.formatMessage({ id: 'pages_upward_mobility.heading' })}
        titleStyles={{marginTop: '4.5rem'}}
      >
        <Text>
          {intl.formatMessage({ id: 'pages_upward_mobility.text' })}
        </Text>
        <Button
          flash={true}
          buttonScheme="teal"
          onClick={() => {
            navigate('/upward-mobility/begin');
          }}
        >
          {intl.formatMessage({ id: 'pages_upward_mobility.button_takeQ' })}
        </Button>
      </Section>
    </>
  );
};

const UpwardMobilityRouter = () => {
  return (
    <PublicLayout>
      <Router basepath="/upward-mobility">
        <UpwardMobilityQuestionnaire path=":questionId" />
        <UpwardMobilityHome path="/" />
      </Router>
    </PublicLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default UpwardMobilityRouter;
