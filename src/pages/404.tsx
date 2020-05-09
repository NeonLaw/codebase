import { PublicLayout } from '@layouts/public';
import React from 'react';

const notFoundText =
  'You just hit a route that doesn&#39;t exist... the sadness.';

const NotFoundPage = () => (
  <PublicLayout>
    <p>{notFoundText}</p>
  </PublicLayout>
);

export default NotFoundPage;
