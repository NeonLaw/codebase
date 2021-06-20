import { Box, Skeleton } from '@chakra-ui/react';

import Link from 'next/link';
import { gutters } from '../../styles/neonLaw';
import { useAllCurrentUserMattersQuery } from '../../utils/api';

interface MattersListProps {
  category: string;
}

export const MattersList = ({ category }: MattersListProps) => {
  const { data, loading } = useAllCurrentUserMattersQuery();

  if (loading) {
    return <Skeleton height="20px" />;
  }

  if (data) {
    const matters = data?.currentUserMatters?.nodes || [];

    return (
      <Box as="ul" margin={`${gutters.xSmall} 0`}>
        {matters.map((matter, key) => {
          const matterCategory = matter.matterTemplateCategory;
          if (matterCategory === category || category === 'all') {
            return (
              <Box as="li" _notLast={{ marginBottom: gutters.micro }}>
                <Box
                  key={key}
                  as="a"
                  href={`/portal/${matterCategory}/${matter.id}`}
                >
                  <Link href={`/portal/${matterCategory}/${matter.id}`}>
                    {matter.name}
                  </Link>
                </Box>
              </Box>
            );
          }
          return null;
        })}
      </Box>
    );
  }

  return null;
};
