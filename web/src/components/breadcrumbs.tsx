/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from '../components/link';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

const getRouteFromPath = (
  path: string,
  paths: string[],
  index: number
): string => {
  if (index == 0) {
    return `/${path}`;
  }

  return '/' + paths.slice(0, index).join('/') + `/${path}`;
};

interface BreadCrumbProps {
  showHome?: boolean;
}

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

  if (
    !firstPath ||
          firstPath === 'callback' ||
          firstPath === 'upward-mobility'
  ) {
    return null;
  }

  return (
    <Breadcrumb mb="2em">
      {showHome && <BreadcrumbItem cursor="pointer">
        <BreadcrumbLink
          className="breadcrumb outline-bordered"
          as={Link}
          to="/"
        >
          {intl.formatMessage({ id: 'breadcrumbs.home' })}
        </BreadcrumbLink>
      </BreadcrumbItem>}
      {paths.map((path, i) => {
        const route = getRouteFromPath(path, paths, i);

        return (
          <BreadcrumbItem key={i} cursor="pointer">
            <BreadcrumbLink
              className="breadcrumb outline-bordered"
              as={Link}
              to={route}
              textTransform="capitalize"
            >
              {path.replace(/-/g, ' ')}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
      <BreadcrumbItem isCurrentPage={true} textTransform="capitalize">
        <BreadcrumbLink className="breadcrumb outline-bordered">
          {currentPath.replace(/-/g, ' ')}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
