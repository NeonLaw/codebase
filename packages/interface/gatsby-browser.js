import { BaseLayout } from '@neonlaw/shared-ui/src/layouts/baseLayout';
import LogRocket from 'logrocket';
import React from 'react';
import setupLogRocketReact from 'logrocket-react';
import { theme } from '@neonlaw/shared-ui/src/themes/neonLaw';

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout theme={theme} {...props}>{element}</BaseLayout>;
};

export const onClientEntry = () => {
  LogRocket.init(process.env.GATSBY_LOGROCKET_CREDENTIALS || '4qbrpw/staging');
  setupLogRocketReact(LogRocket);
};
