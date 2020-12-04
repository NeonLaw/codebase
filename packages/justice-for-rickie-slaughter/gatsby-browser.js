import { BaseLayout } from '@neonlaw/shared-ui/src/layouts/baseLayout';
import React from 'react';
import {
  theme
} from '@neonlaw/shared-ui/src/layouts/justiceForRickieSlaughter';

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout theme={theme} {...props}>{element}</BaseLayout>;
};
