import * as faker from 'faker';
import { app } from '../../src/app';
import { expect } from '@jest/globals';
import request from 'supertest';

describe('Create a person from Auth0', () => {
  it('returns the created user', async () => {
    const email = `${faker.random.uuid()}@sink.sendgrid.com`;
    const sub = faker.random.uuid();

    const res = await request(app)
      .post('/api/auth0-create-person')
      .set('Content-Type', 'application/json')
      .send({ email, sub });

    expect(res.status).toEqual(201);

    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('sub');
  });
});
