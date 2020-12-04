import { BaseLayout } from '@neonlaw/shared-ui/src/layouts/baseLayout';
import { ColorModeScript } from '@chakra-ui/core';
import React from 'react';
import { theme } from '@neonlaw/shared-ui/src/themes/neonLaw';

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout theme={theme} {...props}>{element}</BaseLayout>;
};

export const onRenderBody = ({
  setPostBodyComponents,
  setPreBodyComponents
}) => {
  setPreBodyComponents([<ColorModeScript key="chakra-ui-no-flash" />]);
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
