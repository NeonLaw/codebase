/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import 'dotenv/config';
import express from 'express';

export const endNewRelicTransaction: express.RequestHandler = async (
  request,
  _,
  next
) => {
  if (process.env.NODE_ENV === 'production') {
    require('newrelic').endTransaction(request.originalUrl);
  }
  return next();
};
