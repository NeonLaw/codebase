import 'dotenv/config';
import * as expressWinston from 'express-winston';
import * as winston from 'winston';
import cors from 'cors';
import { createPerson } from './createPerson';
import express from 'express';
import { expressJwtSecret } from 'jwks-rsa';
import { fetchLocaleJson } from './fetchLocaleJson';
import { findPersonBySubOrEmail } from './findPersonBySubOrEmail';
import jwt from 'express-jwt';
import newrelic from 'newrelic';
import { postgraphile } from 'postgraphile';
import { postgraphileOptions } from './postgraphileOptions';
import { postgresUrl } from './postgresUrl';
import rateLimit from 'express-rate-limit';
import { v4 as uuidv4 } from 'uuid';

const checkJwt = jwt({
  algorithms: ['RS256'],
  audience: 'https://www.neonlaw.com/api',
  credentialsRequired: false,
  issuer: `https://${process.env.AUTH0_TENANT}/`,
  secret: expressJwtSecret({
    cache: true,
    jwksRequestsPerMinute: 5,
    jwksUri:
      `https://${process.env.AUTH0_TENANT}/.well-known/jwks.json`,
    rateLimit: true,
  }),
});

const currentUser: express.RequestHandler = async (request, _, next) => {
  if (request.user && request.user.sub) {
    request['authenticatedPerson'] = await findPersonBySubOrEmail(
      request.user.sub
    );
  }
  return next();
};

const addTraceHeaders: express.RequestHandler = async (
  request,
  response,
  next
) => {
  const traceId = uuidv4();
  request['X-Trace-Id'] = traceId;
  response.set('X-Trace-Id', traceId);
  request['X-Forwarded-For'];
  return next();
};

const beginNewRelicTransaction: express.RequestHandler = async (
  request,
  _,
  next
) => {
  if (process.env.NODE_ENV === 'production') {
    newrelic.startWebTransaction(request.originalUrl);
  }
  return next();
};

const endNewRelicTransaction: express.RequestHandler = async (
  request,
  _,
  next
) => {
  if (process.env.NODE_ENV === 'production') {
    newrelic.endTransaction(request.originalUrl);
  }
  return next();
};

const expressApp = express();
expressApp.use(cors());

expressApp.use(expressWinston.logger({
  colorize: false,
  expressFormat: true,
  format: winston.format.combine(
    winston.format.json(),
    require('@newrelic/winston-enricher')()
  ),
  ignoreRoute(request) {
    const ignoredRoutes = [
      '/',
      '/api',
      '/api/',
      '/favicon.ico'
    ];

    return ignoredRoutes.indexOf(request.url) > -1;
  },
  level: 'info',
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  transports: [
    new winston.transports.Console()
  ],
}));

expressApp.get('/', function (_, res) {
  res.send('Neon Law API');
});

expressApp.get('/api', function (_, res) {
  res.send('Neon Law API');
});


expressApp.use('/api/graphql', checkJwt);
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
