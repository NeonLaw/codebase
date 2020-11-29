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

  const zendeskKey = '81e26970-baa7-4b83-a913-984711a0b5f1';

  setPostBodyComponents([
    <script
      id="ze-snippet"
      key="zendesk"
      src={`https://static.zdassets.com/ekr/snippet.js?key=${zendeskKey}`}
    />,
    <script
      key="fathom"
      src="https://anglerfish.neonlaw.com/script.js"
      site="POAUYJMQ"
      excluded-domains="127.0.0.1,localhost"
      defer
    />
  ]);
};
