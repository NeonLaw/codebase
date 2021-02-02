import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorMode
} from '@chakra-ui/core';
import React, { useRef } from 'react';
import { AiFillGift } from 'react-icons/ai';
import { Button } from '../../../components/button';
import { Carousel } from 'react-responsive-carousel';
import { Container } from '../../../components/container';
import { Image } from '../../../components/image';
import { PublicTrustLayout } from '../../../layouts/publicTrustLayout';
import { Seo } from '../../../components/seo';
import { UsdInput } from '../../../components/inputs';
import { colors } from '../../../themes/neonLaw';
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
  const { colorMode } = useColorMode();

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
      <Seo title={title} description={description} />
      <Container>
        <Divider
          orientation="horizontal"
          display={['none', 'none', 'inherit']}
          padding={'1em 0'}
        />
        <Box
          borderRadius="md"
          padding="2em 0"
          overflow="hidden"
        >
          <Carousel showArrows={true} showThumbs={false}>
            <div>
              <img src="/images/wedding-photo-1.png" alt="oakland wedding"/>
            </div>
            <div>
              <img src="/images/wedding-photo-2.png" alt="oakland wedding"/>
            </div>
            <div>
              <img src="/images/wedding-photo-3.png" alt="oakland wedding"/>
            </div>
          </Carousel>
        </Box>
        <Box
          width="100%"
          textAlign="center"
          margin="1em 0"
        >
          <Heading as="h1">
            Michelle and Nick
          </Heading>
        </Box>
        <Grid templateColumns={[
          'repeat(1, 1fr)',
          'repeat(1, 1fr)',
          'repeat(5, 1fr)',
          'repeat(2, 1fr)',
        ]} >
          <GridItem colSpan={[1,1,3,1]}>
            <Text margin="0.5em">
              We met at Pegasus Books in Berekeley and got tacos thereafter.
              Despite being Nick&apos;s favorite college taqueria, Michelle
              thought they were okay but was still interested in watching
              together what turned out to be a terrible Game of Thrones
              Season 8.
            </Text>
            <Text margin="0.5em">
              Cuddling on the couch and talking about the world, we started
              forming an inseparable bond and pursued our joint loves of
              travel, food, tech, and group fitness classes. Until the world
              shut down that is. Since lockdown, we realized that if the only
              person one could spend time with the other, life was and is
              amazing.
            </Text>
            <Text margin="0.5em">
              We got married on&nbsp; <strong>February 1, 2021</strong> in
              Oakland, California with just our immediate family. When the
              world opens up, we would love to celebrate with all of you.
              Until then, please get in touch at family@shook.family.
            </Text>
          </GridItem>
          <GridItem colSpan={[1,1,2,1]}>
            <Box
              borderRadius="md"
              border={`1px solid ${colors.borders[colorMode]}`}
            >
              <Box margin="0.5em" borderRadius="md" overflow="hidden">
                <Image
                  src="polynesia.png"
                  alt="polynesia"
                  aspectRatio={16/9}
                />
              </Box>
              <Box
                width="90%"
                margin="0 auto"
              >
                <Heading as="h3" textAlign="center" paddingTop="1em">
                  Honeymoon Fund
                </Heading>
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
                      required: intl.formatMessage({
                        id: 'forms.amount.required'
                      }),
                    })}
                  />
                  <Box width="100%" padding="1em 0">
                    <Button type="submit" width="100%" color="white">
                      <AiFillGift/>
                      &nbsp;Donate Now
                    </Button>
                  </Box>
                  <Text width="100%" fontSize="0.7em">
                  Please do not feel any pressure to give at all.
                  Michelle and Nick would love to spend time in Polynesia, a
                  place neither has been.
                  </Text>
                  <Text paddingBottom="1em" width="100%" fontSize="0.5em">
                    *Gifts are handled by Neon Law and will show up on your bank
                    statement as&nbsp;<strong>Neon Law</strong>&nbsp;or
                    &nbsp;<strong>www.neonlaw.com</strong>.&nbsp;
                    All proceeds will be given to Michelle and Nick.
                  </Text>
                </form>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </PublicTrustLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default ShookFamilyWeddingPage;
