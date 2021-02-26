import React from 'react';
import { Skeleton } from '@chakra-ui/react';
import { useAllCurrentUserMattersQuery } from '../../utils/api';

export const BusinessMattersList = () => {
  const { data, loading } = useAllCurrentUserMattersQuery();

  if (loading) {
    return <Skeleton height="20px" />;
  }

  if (data) {
    const matters = data?.allCurrentUserMatters?.nodes || [];

    return (
      <>
        {matters.map((matter, key) => {
          if (matter.matterTemplateCategory === 'business') {
            return <h1 key={key}>{matter.id}</h1>;
          }
          return null;
        })}
      </>
    );
  }

  return null;
};
