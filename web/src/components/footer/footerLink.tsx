import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import { useIntl } from 'react-intl';

const Anchor = styled.a`
  display: block;
  padding: 7px 0;
`;

export const FooterLink = ({ path, i18nMessage }) => {
  const intl = useIntl();

  return (
    <Link href={path} passHref>
      <Anchor>
        {intl.formatMessage({ id: i18nMessage })}
      </Anchor>
    </Link>
  );
};
