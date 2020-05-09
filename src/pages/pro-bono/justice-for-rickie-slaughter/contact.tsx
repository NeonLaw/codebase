import {
  Heading,
  Input,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/core';
import { Button } from '@components/button';
import { PublicLayout } from '@layouts/public';
import React from 'react';

const ContactRickiePage = () => {
  return (
    <PublicLayout>
      <Heading textAlign="center" marginTop="20px">
        Contact Rickie Slaughter
      </Heading>

      <Text>
        You can send a letter to Rickie at
        Rickie Slaughter NV #85902
        1250 E Arica Road
        Eloy, AZ 85131
      </Text>
      <Text>
        Or, if you fill out your info below, we will mail out a letter on
        your behalf.
      </Text>
      <form
        action="https://formspree.io/moqdvlav"
        method="POST"
      >
        <Stack spacing={3}>
          <Text>
            Your email:
          </Text>
          <Input
            name="email"
            placeholder="Enter Email"
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.500' }}
          />
          <Text>
            Your message:
          </Text>
          <Textarea name="message"
            placeholder="Enter Email"
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.500' }}
          />
          <Button color="black">Send Information</Button>
        </Stack>
      </form>
    </PublicLayout>
  );
};

export default ContactRickiePage;
