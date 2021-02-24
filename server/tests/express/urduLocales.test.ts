import { app } from '../../src/app';
import { expect } from '@jest/globals';
import request from 'supertest';

describe('Urdu Locale Endpoint', () => {
  it('renders urdu locales in JSON format', async () => {
    const res = await request(app)
      .get('/api/ur.json')
      .send();

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty(['auth.login']);
  });
});
