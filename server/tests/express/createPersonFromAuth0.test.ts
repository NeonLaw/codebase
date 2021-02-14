import * as faker from 'faker';
import { app } from '../../src/app';
import { expect } from '@jest/globals';
import request from 'supertest';

describe('Create a person from Auth0 with authentication token', () => {
  it('returns the created user or the current user', async () => {
    const email = `${faker.random.uuid()}@sink.sendgrid.com`;
    const sub = faker.random.uuid();
    const authenticationToken = process.env.AUTH0_CLIENT_SECRET;

    const res = await request(app)
      .post('/api/auth0-create-person')
      .set('Content-Type', 'application/json')
      .set('Authorization', `basic ${authenticationToken}`)
      .send({ email, sub });

    expect(res.status).toEqual(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('sub');

    const res2 = await request(app)
      .post('/api/auth0-create-person')
      .set('Content-Type', 'application/json')
      .set('Authorization', `basic ${authenticationToken}`)
      .send({ email, sub });

    expect(res2.status).toEqual(201);

    expect(res2.body).toHaveProperty('id');
    expect(res2.body).toHaveProperty('email');
    expect(res2.body).toHaveProperty('sub');
  });
});
