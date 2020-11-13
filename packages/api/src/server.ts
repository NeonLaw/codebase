import 'dotenv/config';
import * as expressWinston from 'express-winston';
import * as winston from 'winston';
import cors from 'cors';
import { default as englishTranslations } from './en.json';
import express from 'express';
import { expressJwtSecret } from 'jwks-rsa';
import { findOrCreatePerson } from './findOrCreatePerson';
import jwt from 'express-jwt';
import newrelic from 'newrelic';
import { postgraphile } from 'postgraphile';
import { postgraphileOptions } from './postgraphileOptions';
import { postgresUrl } from './postgresUrl';
import { default as spanishTranslations } from './es.json';
import { v4 as uuidv4 } from 'uuid';

const checkJwt = jwt({
  algorithms: ['RS256'],
  audience: 'https://api.neonlaw.com',
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
    request['authenticatedPerson'] = await findOrCreatePerson(request.user.sub);
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

const app = express();
app.use(cors());

app.use(expressWinston.logger({
  colorize: false,
  expressFormat: true,
  format: winston.format.combine(
    winston.format.json(),
    require('@newrelic/winston-enricher')()
  ),
  level: 'info',
  meta: true,
  msg: 'HTTP {{req.method}} {{req.url}}',
  transports: [
    new winston.transports.Console()
  ],
}));

app.get('/', function (_, res) {
  res.send('Neon Law API');
});

app.get('/api', function (_, res) {
  res.send('Neon Law API');
});

app.use('/api/graphql', checkJwt);
app.use('/api/graphql', currentUser);
app.use('/api/graphql', addTraceHeaders);
app.use('/api/graphql', beginNewRelicTransaction);

app.use(postgraphile(postgresUrl, 'public', postgraphileOptions));

app.use('/api/graphql', endNewRelicTransaction);

app.get('/api/en.json', function (_, res) {
  res.json(englishTranslations);
});

app.get('/api/en.json', function (_, res) {
  res.json(spanishTranslations);
});

app.listen(3000);
