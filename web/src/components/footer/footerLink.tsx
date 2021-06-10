import Link from 'next/link';
import styled from '@emotion/styled';
import { useIntl } from 'react-intl';

const Anchor = styled.a`
  display: block;
  padding: 7px 0;
  text-decoration: none;
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
