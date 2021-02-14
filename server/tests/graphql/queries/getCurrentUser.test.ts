import * as faker from 'faker';
import { describe, expect, it } from '@jest/globals';
import { runGraphQLQuery } from '../../utils/graphqlHelpers';

describe('the getCurrentUser query', () => {
  describe('as an anonymous user', () => {
    it('returns a null current user object', async () => {
      await runGraphQLQuery({
        async databaseSetup() { return; },
        async databaseTeardown() { return; },
        expectations(response) {
          expect(response.errors).toBeTruthy();
          expect(response.data.getCurrentUser).toBeNull();
          expect(response.errors[0].message).toEqual(
            'permission denied for table person'
          );
        },
        query: '{getCurrentUser { id }}',
        variables: {},
      });
    });
  });

  describe('as a portal user', () => {
    it('returns the current user object', async () => {
      const personId = faker.random.uuid();

      await runGraphQLQuery({
        async databaseSetup(client) {
          await client.query(
            'INSERT INTO person (id, email, role, sub) ' +
            'VALUES ($1, $2, $3, $4) RETURNING id;',
            [personId, 'test@example.com', 'portal', 'test-portal']
          );
        },
        async databaseTeardown(client) {
          await client.query(
            'DELETE FROM person WHERE id = $1',
            [personId]
          );
        },
        expectations(response) {
          expect(response.errors).toBeFalsy();
          expect(response.data.getCurrentUser.id).toEqual(personId);
        },
        personId,
        query: '{getCurrentUser { id }}',
        role: 'portal',
        variables: {},
      });
    });
  });

  describe('as a lawyer user', () => {
    it('returns the current user object', async () => {
      const personId = faker.random.uuid();

      await runGraphQLQuery({
        async databaseSetup(client) {
          await client.query(
            'INSERT INTO person (id, email, role, sub) ' +
            'VALUES ($1, $2, $3, $4) RETURNING id;',
            [personId, 'test@example.com', 'lawyer', 'test-lawyer']
          );
        },
        async databaseTeardown(client) {
          await client.query(
            'DELETE FROM person WHERE id = $1',
            [personId]
          );
        },
        expectations(response) {
          expect(response.errors).toBeFalsy();
          expect(response.data.getCurrentUser.id).toEqual(personId);
        },
        personId,
        query: '{getCurrentUser { id }}',
        role: 'lawyer',
        variables: {},
      });
    });
  });

  describe('as an admin user', () => {
    it('returns the current user object', async () => {
      const personId = faker.random.uuid();

      await runGraphQLQuery({
        async databaseSetup(client) {
          await client.query(
            'INSERT INTO person (id, email, role, sub) ' +
            'VALUES ($1, $2, $3, $4) RETURNING id;',
            [personId, 'test@example.com', 'admin', 'test-admin']
          );
        },
        async databaseTeardown(client) {
          await client.query(
            'DELETE FROM person WHERE id = $1',
            [personId]
          );
        },
        expectations(response) {
          expect(response.errors).toBeFalsy();
          expect(response.data.getCurrentUser.id).toEqual(personId);
        },
        personId,
        query: '{getCurrentUser { id }}',
        role: 'admin',
        variables: {},
      });
    });
  });
});
