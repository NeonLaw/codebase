/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import 'dotenv/config';
import {
  addTraceHeaders,
  beginNewRelicTransaction,
  checkJwt,
  currentUser,
  developmentLogger,
  endNewRelicTransaction,
  logger,
} from './middleware';
import Stripe from 'stripe';
import cors from 'cors';
import { createPerson } from './createPerson';
import express from 'express';
import { fetchLocaleJson } from './fetchLocaleJson';
import { postgraphile } from 'postgraphile';
import { postgraphileOptions } from './postgraphileOptions';
import { postgresUrl } from './postgresUrl';
import rateLimit from 'express-rate-limit';

const expressApp = express();
expressApp.use(cors());

if (process.env.NODE_ENV === 'production') {
  expressApp.use(logger);
} else {
  expressApp.use(developmentLogger);
}

expressApp.get('/', function (_, res) {
  res.send('Neon Law API');
});

expressApp.get('/api', function (_, res) {
  res.send('Neon Law API');
});

expressApp.use('/api/graphql', checkJwt(false));
expressApp.use('/api/graphql', currentUser);
expressApp.use('/api/graphql', addTraceHeaders);
expressApp.use('/api/graphql', beginNewRelicTransaction);

expressApp.use(postgraphile(postgresUrl, 'public', postgraphileOptions));

expressApp.get('/api/process-transloadit-notifications', function (req, res) {
  console.log(req);
  res.send('logged Transloadit notification');
});

expressApp.use('/api/graphql', endNewRelicTransaction);

expressApp.use(express.json());

expressApp.use('/api/auth0-create-person', beginNewRelicTransaction);
expressApp.use('/api/auth0-create-person', (request, response, next) => {
  const authorizationHeader = request.headers?.authorization;
  if (authorizationHeader != `basic ${process.env.AUTH0_CLIENT_SECRET}`) {
    return response.status(403).json({ error: 'No credentials sent!' });
  }
  next();
});
expressApp.post('/api/auth0-create-person', async (request, response) => {
  try {
    const { email, sub } = request.body;

    const person = await createPerson({
      email,
      sub
    });

    response.status(201).json(person);
  } catch (error) {
    response.status(400).send(error);
  }
});

expressApp.use('/api/auth0-create-person', endNewRelicTransaction);

expressApp.use('/api/create-checkout-session', beginNewRelicTransaction);
expressApp.use('/api/create-checkout-session', async (request, response) => {
  const stripe = Stripe(process.env.STRIPE_API_SECRET_KEY as string);
  const session = await stripe.checkout.sessions.create({
    cancel_url: 'https://www.neonlaw.com/cancel-transaction',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Michelle and Nick\'s Honeymoon',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    payment_method_types: ['card'],
    success_url: 'https://www.neonlaw.com/successful-transaction',
  });

  console.log(JSON.stringify(session));

  response.json({ id: session.id });
});
expressApp.use('/api/create-checkout-session', endNewRelicTransaction);

const limiter = rateLimit({
  max: 180,
  windowMs: 60 * 1000,
});

expressApp.use(limiter);

expressApp.get('/api/en.json', function (_, res) {
  res.json(fetchLocaleJson('en'));
});

expressApp.get('/api/es.json', function (_, res) {
  res.json(fetchLocaleJson('es'));
});


export const app = expressApp;
