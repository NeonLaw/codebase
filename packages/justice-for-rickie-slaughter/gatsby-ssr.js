import { BaseLayout } from '@neonlaw/shared-ui/src/layouts/base';
import React from 'react';

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout {...props}>{element}</BaseLayout>;
};

export const onRenderBody = ({ setPostBodyComponents }) => {
  if (process.env.NODE_ENV == 'development') {
    return;
  }

  setPostBodyComponents([
    <script
      key="fathom"
      src="https://anglerfish.neonlaw.com/script.js"
      site="POAUYJMQ"
      defer
    />
  ]);
};
