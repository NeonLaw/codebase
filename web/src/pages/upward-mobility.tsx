import { Button } from '../components/button';
import { PublicLayout } from '../components/layouts/publicLayout';
import { Section } from '../components/section';
import { Seo } from '../components/seo';
import { Text } from '@chakra-ui/react';
import { useIntl } from 'react-intl';

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
          buttonScheme="cyan"
          onClick={() => {
            console.log('/upward-mobility/begin');
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
      <UpwardMobilityHome />
    </PublicLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default UpwardMobilityRouter;
