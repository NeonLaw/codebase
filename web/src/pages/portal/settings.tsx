import { Heading, useDisclosure } from '@chakra-ui/react';
import { gutters, sizes } from '../../styles/neonLaw';

import { Button } from '../../components/button';
import { PortalLayout } from '../../components/layouts/portalLayout';
import {
  PortalProfileCard
} from '../../components/cards/portalProfileCard';
import React from 'react';
import { ThemeSwitcher } from '../../components/themeSwitcher';
import {
  UpdatePersonModal
} from '../../components/modals/updatePersonModal';
import styled from '@emotion/styled';
import { useUser } from '@auth0/nextjs-auth0';

const StyledPortalPersonPage = styled.div`
  max-width: ${sizes.textContainerSmall};

  & > * {
    margin-bottom: ${gutters.xSmallOne};
  }
`;

const PortalSettingsPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { user } = useUser();

  return (
    <PortalLayout>
      <StyledPortalPersonPage>
        <Heading
          fontWeight="normal"
        >
          Settings for {user.email}
        </Heading>
        <PortalProfileCard />
        <Button
          flash={true}
          data-testid="open-update-profile-modal"
          buttonScheme="teal"
          containerStyles={{margin: `0 0 ${gutters.xSmallOne}`}}
          onClick={onOpen}
        >
          Update Profile
        </Button>
        <UpdatePersonModal
          isOpen={isOpen}
          onClose={onClose}
        />
        <ThemeSwitcher styles={{display: 'inline'}} renderText={true}/>
      </StyledPortalPersonPage>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default PortalSettingsPage;
