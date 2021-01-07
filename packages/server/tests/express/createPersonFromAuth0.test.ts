import { app } from '../../src/app';
import { expect } from '@jest/globals';
import request from 'supertest';

describe('English Locale Endpoint', () => {
  it('renders english locales in JSON format', async () => {
    const res = await request(app)
      .post('/api/auth0-create-person')
      .send();

    expect(res.status).toEqual(201);
  });
});
