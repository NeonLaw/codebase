/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import * as expressWinston from 'express-winston';
import * as winston from 'winston';

export const logger = expressWinston.logger({
  colorize: false,
  expressFormat: true,
  format: winston.format.combine(
    winston.format.json(),
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
});
