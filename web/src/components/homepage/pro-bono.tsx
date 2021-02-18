import { Box } from '@chakra-ui/react';
import { PublicLayout } from '../layouts/publicLayout';
import React from 'react';
import { Section } from '../section';
import { UnderlineLink } from '../mdxComponents';
import { sizes } from '../../styles/neonLaw';
import { useIntl } from 'react-intl';

export const ProBono = () => {
  const intl = useIntl();

  return (
    <PublicLayout>
      <Section
        title={intl.formatMessage({ id: 'pro_bono.title' })}
      >
        <Box as="p" maxWidth={sizes.textContainerSmall}>
        Finally, and most importantly, we are proudest of&nbsp;
        our commitment to&nbsp;
          <UnderlineLink href="/pro-bono/">pro bono</UnderlineLink> work&nbsp;
          and wish we could do it full time.&nbsp;
        If you require assistance and have attained a&nbsp;
        SOLA from either{' '}
          <UnderlineLink target="_blank" href="https://nlslaw.net">
          Nevada Legal Services
          </UnderlineLink>{' '}
        or{' '}
          <UnderlineLink target="_blank" href="https://www.lacsn.org/">
          Legal Aid Center of Southern Nevada
          </UnderlineLink>
        , you may <UnderlineLink href="/contact/">contact</UnderlineLink> to us
        for a free consultation.
        </Box>
      </Section>
    </PublicLayout>
  );
};
