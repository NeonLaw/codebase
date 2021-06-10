import { Box, Skeleton } from '@chakra-ui/react';

import Link from 'next/link';
import { gutters } from '../../styles/neonLaw';
import styled from '@emotion/styled';
import { useAllCurrentUserMattersQuery } from '../../utils/api';

const StyledMattersList = styled.div`
  ul {
    margin: ${gutters.xSmall} 0;
  }

  li:not(:last-child) {
    margin-bottom: ${gutters.micro};
  }
`;

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
      <StyledMattersList>
        <ul>
          {matters.map((matter, key) => {
            const matterCategory = matter.matterTemplateCategory;
            if (matterCategory === category || category === 'all') {
              return (
                <li>
                  <Box
                    key={key}
                    as="a"
                    href={`/portal/${matterCategory}/${matter.id}`}
                  >
                    <Link href={`/portal/${matterCategory}/${matter.id}`}>
                      {matter.name}
                    </Link>
                  </Box>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </StyledMattersList>
    );
  }

  return null;
};
