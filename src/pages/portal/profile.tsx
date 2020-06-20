import { Heading } from '@chakra-ui/core';
import { PortalLayout } from '@layouts/portal';
import { PortalProfileCard } from '@components/cards/profileCard';
import { PortalProfileForm } from '@forms/portalProfileForm';
import React from 'react';

const PortalProfilePage = () => {
  return (
    <PortalLayout>
      <Heading>Your Profile</Heading>
      <PortalProfileCard />
      <PortalProfileForm />
    </PortalLayout>
  );
};

export default PortalProfilePage;
