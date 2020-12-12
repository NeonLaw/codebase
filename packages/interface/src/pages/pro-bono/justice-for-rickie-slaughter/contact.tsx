import {
  Heading,
  Input,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/core';
import { Button } from '../../../components/button';
import { PublicLayout } from '../../../layouts/publicLayout';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const ContactRickiePage = () => {
  const intl = useIntl();
  return (
    <PublicLayout>
      <Heading textAlign="center" marginTop="20px">
        {intl.formatMessage({ id: 'pages_pro_bono.heading' })}
      </Heading>

      <Text>
        {intl.formatMessage({ id: 'pages_pro_bono.text1' })}
      </Text>
      <Text>
        {intl.formatMessage({ id: 'pages_pro_bono.text2' })}
      </Text>
      <form
        action="https://formspree.io/moqdvlav"
        method="POST"
      >
        <Stack spacing={3}>
          <Text>
            {intl.formatMessage({ id: 'pages_pro_bono.form.email' })}
          </Text>
          <Input
            name="email"
            placeholder={`${intl.formatMessage({
              id: 'pages_pb.form.email_ph'
            })}`}
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.500' }}
          />
          <Text>
            {intl.formatMessage({ id: 'pages_pro_bono.form.message' })}
          </Text>
          <Textarea name="message"
            placeholder={`${intl.formatMessage({
              id: 'pages_pb.form.message_ph'
            })}`}
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.500' }}
          />
          <Button color="black">
            {intl.formatMessage({ id: 'pages_pb.form.send' })}
          </Button>
        </Stack>
      </form>
    </PublicLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default ContactRickiePage;
