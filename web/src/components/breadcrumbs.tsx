import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import Link from 'next/link';
import { colors } from '../styles/neonLaw';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

const getRouteFromPath = (
  path: string,
  paths: string[],
  index: number,
): string => {
  if (index == 0) {
    return `/${path}`;
  }

  return '/' + paths.slice(0, index).join('/') + `/${path}`;
};

interface BreadCrumbProps {
  showHome?: boolean;
}

const StyledBreadcrumbLink = ({ children, href, as }: any) => (
  <BreadcrumbLink
    as={as}
    href={href}
    className="breadcrumb outline-bordered"
    _hover={{
      color: colors.primaryColor400,
      textDecoration: 'underline',
    }}
    _focus={{
      color: colors.primaryColor400,
      textDecoration: 'underline',
    }}
    pointerEvents={!href ? 'none' : 'initial'}
    tabIndex={!href ? -1 : 0}
  >
    {children}
  </BreadcrumbLink>
);

export const Breadcrumbs = ({ showHome = true }: BreadCrumbProps) => {
  const intl = useIntl();
  const router = useRouter();
  const pathname = router.pathname;

  // Slice the first element since it is an empty string
  const paths = pathname.split('/');

  if (paths[0] === '') {
    paths.shift();
  }

  if (paths[paths.length - 1] === '') {
    paths.pop();
  }

  const currentPath = paths.pop();

  const firstPath = paths[0]?.toLowerCase();

  if (firstPath === 'en' || firstPath === 'es') {
    paths.shift();
  }

  if (!firstPath || firstPath === 'upward-mobility') {
    return null;
  }

  return (
    <Breadcrumb mb="2em">
      {showHome && (
        <BreadcrumbItem>
          <StyledBreadcrumbLink as={Link} href="/">
            {intl.formatMessage({ id: 'breadcrumbs.home' })}
          </StyledBreadcrumbLink>
        </BreadcrumbItem>
      )}
      {paths.map((path, i) => {
        const route = getRouteFromPath(path, paths, i);

        return (
          <BreadcrumbItem key={i}>
            <StyledBreadcrumbLink
              as={Link}
              href={route}
              textTransform="capitalize"
            >
              {intl.formatMessage({ id: `breadcrumbs.${path}` })}
            </StyledBreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
      <BreadcrumbItem isCurrentPage={true} textTransform="capitalize">
        <StyledBreadcrumbLink>
          {currentPath.replace(/-/g, ' ')}
        </StyledBreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
