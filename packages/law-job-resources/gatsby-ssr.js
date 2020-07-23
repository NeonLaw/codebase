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
    <script
      src="https://anglerfish.neonlaw.com/script.js"
      site="AYTHNHSX"
      defer
    />
  );

  replaceHeadComponents(headComponents);
};
