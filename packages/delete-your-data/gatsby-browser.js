import React from 'react';

export const wrapPageElement = ({ element, props }) => {
  return <React.Fragment {...props}>{element}</React.Fragment>;
};
