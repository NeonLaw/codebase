import { Box, Heading } from '@chakra-ui/core';
import { navigate, useIntl } from 'gatsby-plugin-intl';

import { Button } from '@neonlaw/shared-ui/src/components/button';
import { PortalLayout } from '../../../layouts/portalLayout';
import React from 'react';
import { gutters } from '../../../themes/neonLaw';
import styled from '@emotion/styled';

const StyledAdminPortalOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${gutters.xSmall};
  max-width: 100%;

  @media(min-width: 1215px) {
    max-width: 1000px;
  }
`;

interface AdminPortalOption {
  path: string;
  text: string;
  dataTestId?: string;
}

const AdminDashboard = () => {
  const intl = useIntl();

  const adminPortalOptions: AdminPortalOption[] = [
    {
      path: 'questions',
      text: 'Questions',
    },
    {
      dataTestId: '',
      path: 'questionnaires',
      text: 'Questionnaires',
    },
    {
      dataTestId: '',
      path: 'matter-document-templates',
      text: 'Matter Document Templates',
    },
    {
      dataTestId: '',
      path: 'matter-templates',
      text: 'Matter Templates',
    },
    {
      dataTestId: 'admin-people-link-button',
      path: 'people',
      text: 'People',
    },
    {
      dataTestId: 'admin-matters-link-button',
      path: 'matters',
      text: 'Matters',
    },
  ];

  return (
    <PortalLayout>
      <Box>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages_admin.heading' })}
        </Heading>

        <StyledAdminPortalOptions>
          {adminPortalOptions.map(({ path, text, dataTestId }, i) => (
            <Button
              flash={false}
              colorScheme="gray"
              onClick={() => {
                navigate(`/portal/admin/${path}`);
              }}
              data-testid={dataTestId}
              key={i+path}
            >
              {text}
            </Button>
          ))}
        </StyledAdminPortalOptions>
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminDashboard;
