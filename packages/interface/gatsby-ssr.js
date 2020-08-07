import { BaseLayout } from '@neonlaw/shared-ui/src/layouts/base';
import React from 'react';

export const wrapPageElement = ({ element, props }) => {
  return <BaseLayout {...props}>{element}</BaseLayout>;
};

export const onPreRenderHTML = (
  { getHeadComponents, replaceHeadComponents }
) => {
  const headComponents = getHeadComponents();

  headComponents.push(
    <script key="ze-settings" src="/scripts/ze-settings.js" />
  );

  replaceHeadComponents(headComponents);
};

export const onRenderBody = ({ setPostBodyComponents }) => {
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
      site="DUBLGHDJ"
      excluded-domains="127.0.0.1,localhost,neonlaw.net"
      defer
    />
  ]);
};
