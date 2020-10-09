import { BaseLayout } from '@neonlaw/shared-ui/src/layouts/base';
import LogRocket from 'logrocket';
import React from 'react';
import setupLogRocketReact from 'logrocket-react';

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout {...props}>{element}</BaseLayout>;
};

export const onClientEntry = () => {
  LogRocket.init(process.env.GATSBY_LOGROCKET_CREDENTIALS || '4qbrpw/staging');
  setupLogRocketReact(LogRocket);
};
