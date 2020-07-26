import { BaseLayout } from '@neonlaw/shared-ui/src/layouts/base';
import React from 'react';

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout {...props}>{element}</BaseLayout>;
};

export const onRenderBody = ({ setPostBodyComponents }) => {
  if (
    process.env.NODE_ENV == 'development' ||
    process.env.GATSBY_ACTIVE_ENV == 'development' ||
    process.env.GATSBY_ACTIVE_ENV == 'staging'
  ) {
    return;
  }

  setPostBodyComponents([
    <script
      key="fathom"
      src="https://anglerfish.neonlaw.com/script.js"
      site="DUBLGHDJ"
      excluded-domains="127.0.0.1,localhost,lawjobresources.net"
      defer
    />
  ]);
};
