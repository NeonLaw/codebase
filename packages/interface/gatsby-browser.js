import { BaseLayout } from '@neonlaw/shared-ui/src/layouts/base';
import React from 'react';

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout {...props}>{element}</BaseLayout>;
};
