import { Box, ListItem, Skeleton, UnorderedList } from '@chakra-ui/react';
import Link from 'next/link';
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
      <UnorderedList spacing={3}>
        {matters.map((matter, key) => {
          const matterCategory = matter.matterTemplateCategory;
          if ( matterCategory === category || category === 'all') {
            return (
              <Box
                key={key}
                as="a"
                href={`/portal/${matterCategory}/${matter.id}`}
              >
                <Link href={`/portal/${matterCategory}/${matter.id}`}>
                  <ListItem>
                    {matter.name}
                  </ListItem>
                </Link>
              </Box>
            );
          }
          return null;
        })}
      </UnorderedList>
    );
  }

  return null;
};
