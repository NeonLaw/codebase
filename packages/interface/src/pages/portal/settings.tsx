import { Heading, useDisclosure } from '@chakra-ui/core';
import { gutters, sizes } from '../../themes/neonLaw';

import { FlashButton } from '../../components/button';
import { PortalLayout } from '../../layouts/portalLayout';
import {
  PortalProfileCard
} from '../../components/cards/portalProfileCard';
import React from 'react';
import {
  UpdatePersonModal
} from '../../forms/updatePersonModal';
import styled from '@emotion/styled';

const StyledPortalPersonPage = styled.div`
  max-width: ${sizes.textContainerSmall};

  & > * {
    margin-bottom: ${gutters.xSmallOne};
  }
`;

const PortalSettingsPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <PortalLayout>
      <StyledPortalPersonPage>
        <Heading
          fontWeight="normal"
        >
          Settings
        </Heading>
        <PortalProfileCard />
        <FlashButton
          data-testid="open-update-profile-modal"
          buttonScheme="teal"
          containerStyles={{margin: `0 0 ${gutters.xSmallOne}`}}
          onClick={onOpen}
        >
          Update Profile
        </FlashButton>
        <UpdatePersonModal
          isOpen={isOpen}
          onClose={onClose}
        />
      </StyledPortalPersonPage>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default PortalSettingsPage;
