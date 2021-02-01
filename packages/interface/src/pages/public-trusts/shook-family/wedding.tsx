import React, { useRef } from 'react';
import { Breadcrumbs } from '../../../components/breadcrumbs';
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
      <Breadcrumbs />
      <Seo title={title} description={description} />
      Shook Family Wedding

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
        <button type="submit">
        Pay
        </button>
      </form>
    </PublicTrustLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default ShookFamilyWeddingPage;
