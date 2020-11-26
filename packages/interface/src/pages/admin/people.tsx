import { Box } from '@chakra-ui/core';
import { Breadcrumbs } from '@neonlaw/shared-ui/src/components/breadcrumbs';
import {
  PeopleTable
} from '@neonlaw/shared-ui/src/components/tables/peopleTable';
import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import React from 'react';

const AdminPeople = () => {
  return (
    <PortalLayout>
      <Box textAlign="left">
        <Breadcrumbs />

        <PeopleTable />
      </Box>
    </PortalLayout>
  );
};

export default AdminPeople;
