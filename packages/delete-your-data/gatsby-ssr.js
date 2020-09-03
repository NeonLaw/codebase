import { BaseLayout } from '@neonlaw/shared-ui/src/layouts/base';
import { ColorModeScript } from '@chakra-ui/core';
import React from 'react';

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout {...props}>{element}</BaseLayout>;
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
      site="AOKZDDGF"
      excluded-domains="127.0.0.1,localhost,deleteyourdata.info"
      defer
    />
  ]);
};
