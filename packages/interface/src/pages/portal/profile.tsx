import { Heading, useDisclosure } from '@chakra-ui/core';
import { gutters, sizes } from '@neonlaw/shared-ui/src/themes/neonLaw';

import { FlashButton } from '@neonlaw/shared-ui/src/components/button';
import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import {
  PortalProfileCard
} from '@neonlaw/shared-ui/src/components/cards/portalProfileCard';
import React from 'react';
import {
  UpdateProfileModal
} from '@neonlaw/shared-ui/src/forms/updateProfileModal';
import styled from '@emotion/styled';

const StyledPortalProfilePage = styled.div`
  max-width: ${sizes.textContainerSmall};

  & > * {
    margin-bottom: ${gutters.xSmallOne};
  }
`;

const PortalProfilePage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <PortalLayout>
      <StyledPortalProfilePage>
        <Heading 
          fontWeight="normal"
        >
          Your Profile
        </Heading>
        <PortalProfileCard />
        <FlashButton
          buttonScheme="teal"
          containerStyles={{margin: `0 0 ${gutters.xSmallOne}`}}
          onClick={onOpen} 
        >
          Update Profile
        </FlashButton>
        <UpdateProfileModal 
          isOpen={isOpen} 
          onClose={onClose}
        />
      </StyledPortalProfilePage>
    </PortalLayout>
  );
};

export default PortalProfilePage;
