import React from 'react';
import { Skeleton } from '@chakra-ui/react';
import { useAllCurrentUserMattersQuery } from '../../utils/api';

export const MattersList = ({ category }) => {
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
            return <h1 key={key}>{matter.id}</h1>;
          }
          return null;
        })}
      </>
    );
  }

  return null;
};
