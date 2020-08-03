import 'dotenv/config';

import cors from 'cors';
import express from 'express';
import jwksRsa from 'jwks-rsa';
import jwt from 'express-jwt';
import { postgraphile } from 'postgraphile';
import { postgraphileOptions } from './postgraphileOptions';
import { postgresUrl } from './postgresUrl';

const checkJwt = jwt({
  algorithms: ['RS256'],
  audience: 'https://api.neonlaw.com',
  credentialsRequired: false,
  issuer: `https://${process.env.AUTH0_TENANT}/`,
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    jwksRequestsPerMinute: 5,
    jwksUri:
      `https://${process.env.AUTH0_TENANT}/.well-known/jwks.json`,
    rateLimit: true,
  }),
});

const app = express();
app.use(cors());


app.get('/', function (_, res) {
  res.send('Neon Law API');
});

app.get('/api', function (_, res) {
  res.send('Neon Law API');
});

app.use('/api/graphql', checkJwt);

app.use(postgraphile(postgresUrl, 'public', postgraphileOptions));

app.listen(3000);
