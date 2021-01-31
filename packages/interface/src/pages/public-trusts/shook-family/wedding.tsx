import React, { useRef } from 'react';
import { Breadcrumbs } from '../../../components/breadcrumbs';
import { PublicTrustLayout } from '../../../layouts/publicTrustLayout';
import { Seo } from '../../../components/seo';
import { loadStripe } from '@stripe/stripe-js';
import { useForm } from 'react-hook-form';

const stripePromise = loadStripe(process.env.STRIPE_CLIENT_KEY as string);

const ShookFamilyWeddingPage = () => {
  const title = 'Shook Family Wedding';
  const description = 'The Shook Family Wedding February 1, 2021';
  const { handleSubmit } = useForm();

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async () => {
    // Get Stripe.js instance
    const stripe = await stripePromise;

    if (!stripe) {
      return;
    }

    // Call your backend to create the Checkout Session
    const response = await fetch(
      `${process.env.GATSBY_API_URL}/api/create-checkout-session`,
      { method: 'POST' }
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
      <Breadcrumbs />
      <Seo title={title} description={description} />
      Shook Family Wedding

      <form
        onSubmit={handleSubmit(onSubmit as any)}
        ref={formRef}
      >
        <button type="submit">
        Pay
        </button>
      </form>
    </PublicTrustLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default ShookFamilyWeddingPage;
