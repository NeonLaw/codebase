/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

export const addTraceHeaders: express.RequestHandler = async (
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
