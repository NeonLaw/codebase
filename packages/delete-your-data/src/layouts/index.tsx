import { BaseStyles } from '../styles/base';
import React from 'react';

const IndexLayout = ({ children }) => (
  <>
    <BaseStyles />
    {children}
  </>
);

export default IndexLayout;
