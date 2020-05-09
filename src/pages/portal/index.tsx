import {
  Heading,
  Text,
} from '@chakra-ui/core';
import { PortalLayout } from '@layouts/portal';
import React from 'react';

const PortalPage = () => {
  return (
    <PortalLayout>
      <Heading textAlign="center" marginBottom="20px">
        Your Legal Matters
      </Heading>


      <Text>
        You currently do not have any active matters with our firm or our
        network. Contact us if you are interested in retaining our services.
      </Text>
    </PortalLayout>
  );
};

export default PortalPage;
