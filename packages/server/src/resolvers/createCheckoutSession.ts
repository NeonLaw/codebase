import Stripe from 'stripe';

export const createCheckoutSession = async (request, response) => {
  const stripe = new Stripe(process.env.STRIPE_API_SECRET_KEY as string, {
    apiVersion: '2020-08-27',
  });
  const { amount } = request.body;

  const session = await stripe.checkout.sessions.create({
    cancel_url: 'https://www.neonlaw.com/cancel-transaction',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Michelle and Nick\'s Honeymoon Fund',
          },
          unit_amount: amount * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    payment_method_types: ['card'],
    success_url: 'https://www.neonlaw.com/successful-transaction',
  });

  response.json({ id: session.id });
};
