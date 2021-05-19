import { Box } from '@chakra-ui/react';
import { Section } from '../section';
import { UnderlineLink } from '../mdxComponents';
import { sizes } from '../../styles/neonLaw';
import { useIntl } from 'react-intl';

export const ProBono = () => {
  const intl = useIntl();

  return (
    <Section title={intl.formatMessage({ id: 'pro_bono.title' })}>
      <Box as="p" maxWidth={sizes.textContainerSmall}>
        {intl.formatMessage({ id: 'pro_bono.p1' })}{' '}
        <UnderlineLink href="/pro-bono">
          {intl.formatMessage({ id: 'pro_bono.l1' })}
        </UnderlineLink>{' '}
        {intl.formatMessage({ id: 'pro_bono.p2' })}{' '}
        <UnderlineLink href="https://nlslaw.net">
          {intl.formatMessage({ id: 'pro_bono.l2' })}
        </UnderlineLink>{' '}
        {intl.formatMessage({ id: 'pro_bono.p3' })}{' '}
        <UnderlineLink href="https://www.lacsn.org/">
          {intl.formatMessage({ id: 'pro_bono.l3' })}
        </UnderlineLink>
        {intl.formatMessage({ id: 'pro_bono.p4' })}{' '}
        <UnderlineLink href="/contact/">
          {intl.formatMessage({ id: 'pro_bono.l4' })}
        </UnderlineLink>{' '}
        {intl.formatMessage({ id: 'pro_bono.p5' })}
      </Box>
    </Section>
  );
};
