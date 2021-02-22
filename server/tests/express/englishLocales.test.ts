import { app } from '../../src/app';
import { expect } from '@jest/globals';
import request from 'supertest';

describe('English Locale Endpoint', () => {
  it('renders english locales in JSON format', async () => {
    const res = await request(app)
      .get('/api/en.json')
      .send();

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty(['auth.login']);
  });
});
