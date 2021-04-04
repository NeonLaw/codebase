import { Box, Skeleton } from '@chakra-ui/react';
import Link from 'next/link';
import { useAllCurrentUserMattersQuery } from '../../utils/api';

export const MattersList = ({ category, basePath }) => {
  const { data, loading } = useAllCurrentUserMattersQuery();

  if (loading) {
    return <Skeleton height="20px" />;
  }

  if (data) {
    const matters = data?.currentUserMatters?.nodes || [];

    return (
      <>
        {matters.map((matter, key) => {
          if (matter.matterTemplateCategory === category) {
            return (
              <Box key={key} as="a" href={`${basePath}/${matter.id}`}>
                <Link href={`${basePath}/${matter.id}`}>
                  {matter.name}
                </Link>
              </Box>
            );
          }
          return null;
        })}
      </>
    );
  }

  return null;
};
