import { BaseLayout } from '@neonlaw/shared-ui/src/layouts/baseLayout';
import React from 'react';
import {
  theme
} from '@neonlaw/shared-ui/src/themes/justiceForRickieSlaughter';

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout theme={theme} {...props}>{element}</BaseLayout>;
};
