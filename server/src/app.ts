/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import 'dotenv/config';
import {
  addTraceHeaders,
  checkJwt,
  currentUser,
  logger,
} from './middleware';
import { Pool } from 'pg';
import cors from 'cors';
import { createCheckoutSession } from './resolvers/createCheckoutSession';
import { createPerson } from './createPerson';
import express from 'express';
import { postgraphile } from 'postgraphile';
import { postgraphileOptions } from './postgraphileOptions';
import { postgresUrl } from './postgresUrl';
import rateLimit from 'express-rate-limit';

const expressApp = express();
expressApp.use(cors());

expressApp.use(logger);

expressApp.get('/', function (_, res) {
  res.send('Neon Law API');
});

expressApp.get('/api', function (_, res) {
  res.send('Neon Law API');
});

expressApp.use('/graphql', checkJwt(false));
expressApp.use('/graphql', currentUser);
expressApp.use('/graphql', addTraceHeaders);

const pool = new Pool({ connectionString: postgresUrl });
const $$pgClientOrigQuery = Symbol();
pool.on('error', (er) => { console.log(er); });
pool.on('connect', (pgClient) => {
  if (!pgClient[$$pgClientOrigQuery]) {
    // Set the original query method to a key on our client. If that key is
    // already set, use that.
    pgClient[$$pgClientOrigQuery] = pgClient.query;
    pgClient.query = function (...args: Array<any>): any {
      // const [a, b] = args;
      // const query = a && a.text ? a.text : a;
      // const values = a && a.text ? a.values : b;
      // console.log(query);
      // console.log(values);
      // add query opentelemetry logging here
      return pgClient[$$pgClientOrigQuery].apply(this, args);
    };
  }
});

expressApp.use(
  postgraphile(
    pool,
    ['public', 'accounting'],
    postgraphileOptions
  )
);

expressApp.get('/api/process-transloadit-notifications', function (req, res) {
  console.log(req);
  res.send('logged Transloadit notification');
});


expressApp.use(express.json());

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
    console.error(error);
    response.status(400).send(error);
  }
});


expressApp.use('/api/create-checkout-session', createCheckoutSession);

const limiter = rateLimit({
  max: 180,
  windowMs: 60 * 1000,
});

expressApp.use(limiter);

export const app = expressApp;
