/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import express from 'express';
import { findPersonBySubOrEmail } from '../findPersonBySubOrEmail';

export const currentUser: express.RequestHandler = async (request, _, next) => {
  if (request.user && request.user.sub) {
    request['authenticatedPerson'] = await findPersonBySubOrEmail(
      request.user.sub
    );
  }
  return next();
};
