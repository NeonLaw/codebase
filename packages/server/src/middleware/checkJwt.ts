import { expressJwtSecret } from 'jwks-rsa';
import jwt from 'express-jwt';

export const checkJwt = (credentialsRequired: boolean) => {
  return jwt({
    algorithms: ['RS256'],
    audience: 'https://www.neonlaw.com/api',
    credentialsRequired,
    issuer: `https://${process.env.AUTH0_TENANT}/`,
    secret: expressJwtSecret({
      cache: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${process.env.AUTH0_TENANT}/.well-known/jwks.json`,
      rateLimit: true,
    }),
  });
};
