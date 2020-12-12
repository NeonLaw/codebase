import React from 'react';

export const DateFromTimestamp = ({ timestamp }) => {
  const date = new Date(timestamp).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (<span>{date}</span>);
};
