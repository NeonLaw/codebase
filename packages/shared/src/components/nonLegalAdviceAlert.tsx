import { Alert, AlertDescription } from '@chakra-ui/core';
import React from 'react';

export const NonLegalAdviceAlert = () => (
  <Alert status="warning">
    <AlertDescription>
      This material is intended as only an example which you may use in
      developing your own form. It is not considered legal advice and as
      always, you will need to do your own research to make your own
      conclusions with regard to the laws and ethical opinions of your
      jurisdiction. In no event will Neon Law be liable for any direct,
      indirect, or consequential damages resulting from the use of this
      material.
    </AlertDescription>
  </Alert>
);
