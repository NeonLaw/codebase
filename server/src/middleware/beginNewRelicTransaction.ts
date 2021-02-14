/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import 'dotenv/config';
import express from 'express';

export const beginNewRelicTransaction: express.RequestHandler = async (
  request,
  _,
  next
) => {
  if (process.env.NODE_ENV === 'production') {
    require('newrelic').startWebTransaction(request.originalUrl);
  }
  return next();
};
