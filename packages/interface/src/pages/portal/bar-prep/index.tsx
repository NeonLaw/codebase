import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import { gutters, sizes } from '../../../themes/neonLaw';
import {
  MatterTemplateQuestionnairesList
} from '../../../components/lists/matterTemplateQuestionnairesList';
import { PortalLayout } from '../../../layouts/portalLayout';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const BarPrepIndexPage = (props) => {
  const intl = useIntl();

  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.bar_prep.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages.bar_prep.text' })}
        </Text>
      </Box>

      <MatterTemplateQuestionnairesList
        basePath="/portal/bar-prep"
        category="bar-prep"
      />
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default BarPrepIndexPage;
