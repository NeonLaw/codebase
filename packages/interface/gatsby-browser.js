import { BaseLayout } from '@neonlaw/shared-ui/src/layouts/base';
import React from 'react';
import LogRocket from 'logrocket';

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout {...props}>{element}</BaseLayout>;
};

export const onClientEntry = () => {
  if (process.env.GATSBY_LOGROCKET_CREDENTIALS) {
    LogRocket.init(process.env.GATSBY_LOGROCKET_CREDENTIALS);
  }
};
