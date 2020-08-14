import { gutters, sizes } from '@neonlaw/shared-ui/src/themes/neonLaw';

import { Heading } from '@chakra-ui/core';
import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import {
  PortalProfileCard
} from '@neonlaw/shared-ui/src/components/cards/portalProfileCard';
import {
  PortalProfileForm
} from '@neonlaw/shared-ui/src/forms/portalProfileForm';
import React from 'react';
import styled from '@emotion/styled';

const StyledPortalProfilePage = styled.div`
  max-width: ${sizes.textContainerSmall};

  & > * {
    margin-bottom: ${gutters.xSmallOne};
  }
`;

const PortalProfilePage = () => {
  return (
    <PortalLayout>
      <StyledPortalProfilePage>
        <Heading 
          fontWeight="normal"
        >
          Your Profile
        </Heading>
        <PortalProfileCard />
        <PortalProfileForm />
      </StyledPortalProfilePage>
    </PortalLayout>
  );
};

export default PortalProfilePage;
