import { Heading, useDisclosure } from '@chakra-ui/core';
import { gutters, sizes } from '@neonlaw/shared-ui/src/themes/neonLaw';

import { FlashButton } from '@neonlaw/shared-ui/src/components/button';
import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import {
  PortalProfileCard
} from '@neonlaw/shared-ui/src/components/cards/portalProfileCard';
import React from 'react';
import {
  UpdatePersonModal
} from '@neonlaw/shared-ui/src/forms/updatePersonModal';
import styled from '@emotion/styled';

const StyledPortalPersonPage = styled.div`
  max-width: ${sizes.textContainerSmall};

  & > * {
    margin-bottom: ${gutters.xSmallOne};
  }
`;

const PortalPersonPage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <PortalLayout>
      <StyledPortalPersonPage>
        <Heading
          fontWeight="normal"
        >
          Your Profile
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

export default PortalPersonPage;
