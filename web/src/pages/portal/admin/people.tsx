import { Box } from '@chakra-ui/react';
import {
  PeopleTable
} from '../../../components/tables/peopleTable';
import { PortalLayout } from '../../../components/layouts/portalLayout';

const AdminPeople = () => {
  return (
    <PortalLayout>
      <Box textAlign="left">
        <PeopleTable />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminPeople;
