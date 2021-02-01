import { Box, Heading, Text } from '@chakra-ui/core';
import React, { useRef } from 'react';
import { AiFillGift } from 'react-icons/ai';
import { Breadcrumbs } from '../../../components/breadcrumbs';
import { Button } from '../../../components/button';
import { Container } from '../../../components/container';
import { Image } from '../../../components/image';
import { PublicTrustLayout } from '../../../layouts/publicTrustLayout';
import { Seo } from '../../../components/seo';
import { UsdInput } from '../../../components/inputs';
import { loadStripe } from '@stripe/stripe-js';
import { useForm } from 'react-hook-form';
import { useIntl } from 'gatsby-plugin-intl';

const stripePromise = loadStripe(process.env.STRIPE_CLIENT_KEY as string);

const ShookFamilyWeddingPage = () => {
  const title = 'Shook Family Wedding';
  const description = 'The Shook Family Wedding February 1, 2021';
  const { errors, handleSubmit, register } = useForm({
    defaultValues: { amount: 100 }
  });
  const intl = useIntl();

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async ({ amount }) => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    if (!stripe) {
      return;
    }

    // Call your backend to create the Checkout Session
    const response = await fetch(
      `${process.env.GATSBY_API_URL}/api/create-checkout-session`,
      {
        body: JSON.stringify({ amount }),
        headers: { 'Content-Type': 'application/json'},
        method: 'POST',
      }
    );

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return (
    <PublicTrustLayout>
      <Container>
        <Breadcrumbs />
        <Seo title={title} description={description} />
        <Box
          width="100%"
          textAlign="center"
        >
          <Heading as="h1">
      Michelle and Nick
          </Heading>
          <Heading as="h2">
      February 1, 2021
          </Heading>
        </Box>
        <Box
          borderRadius="md"
          border="1px solid black"
        >
          <Image src="polynesia.jpg" alt="polynesia" aspectRatio={16/9} />
          <Heading as="h3" textAlign="center" padding="1em 0 0.5em 0">
            Donate to Michelle and Nick&apos;s Honeymoon Fund
          </Heading>
          <Box
            width="90%"
            margin="0 auto"
          >
            <form
              onSubmit={handleSubmit(onSubmit as any)}
              ref={formRef}
            >
              <UsdInput
                name="amount"
                testId="shook-family-wedding-form-amount"
                label={intl.formatMessage({ id: 'forms.amount.label' })}
                errors={errors}
                placeholder={intl.formatMessage({
                  id: 'forms.amount.placeholder'
                })}
                register={register({
                  required: intl.formatMessage({ id: 'forms.amount.required' }),
                })}
              />
              <Box width="100%" padding="1em 0">
                <Button type="submit" width="100%" color="white">
                  <AiFillGift/>
                &nbsp;Donate Now
                </Button>
              </Box>
              <Text paddingBottom="1em" width="100%">
                Transactions will be processed by <em>www.neonlaw.com</em>&nbsp;
                for Michelle and Nick.
              </Text>
            </form>
          </Box>
        </Box>
      </Container>
    </PublicTrustLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default ShookFamilyWeddingPage;
