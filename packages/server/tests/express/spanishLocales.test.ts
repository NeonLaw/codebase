import { app } from '../../src/app';
import { expect } from '@jest/globals';
import request from 'supertest';

describe('Spanish Locale Endpoint', () => {
  it('renders spanish locales in JSON format', async () => {
    const res = await request(app)
      .get('/api/es.json')
      .send();

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('pages');
  });
});
