import { BaseLayout } from './src/layouts/baseLayout';
import React from 'react';
import { theme } from './src/themes/neonLaw';

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout theme={theme} {...props}>{element}</BaseLayout>;
};
