import * as faker from 'faker';
import { describe, expect, it } from '@jest/globals';
import { runGraphQLQuery } from '../../utils/graphqlHelpers';

describe('the updatePersonById mutation', () => {
  const updatePersonByIdMutation =
    `mutation UpdatePersonById($id: UUID!, $name: String!) {
      updatePersonById(
        input: {
          id: $id
          personPatch: {
            name: $name
          }
        }
      ) {
        person {
          id
          name
          email
        }
      }
    }`;

  describe('as an anonymous user', () => {
    it('returns a null updatePerson object', async () => {
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
          expect(response.errors).toBeTruthy();
          expect(response.data.updatePersonById).toBeNull();
          expect(response.errors[0].message).toEqual(
            'permission denied for table person'
          );
        },
        query: updatePersonByIdMutation,
        variables: {
          id: personId,
          name: 'yes'
        },
      });
    });
  });

  describe('as a portal user', () => {
    it('returns the updated user when updating themself', async () => {
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
          expect(response.data.updatePersonById.person.id).toEqual(personId);
          expect(response.data.updatePersonById.person.name).toEqual('yes');
        },
        personId,
        query: updatePersonByIdMutation,
        role: 'portal',
        variables: {
          id: personId,
          name: 'yes'
        },
      });
    });

    it('returns an error when updating another user', async () => {
      const personId = faker.random.uuid();
      const otherPersonId = faker.random.uuid();

      await runGraphQLQuery({
        async databaseSetup(client) {
          await client.query(
            'INSERT INTO person (id, email, role, sub) ' +
            'VALUES ($1, $2, $3, $4) RETURNING id;',
            [personId, 'test@example.com', 'portal', 'test-portal']
          );
          await client.query(
            'INSERT INTO person (id, email, role, sub) ' +
            'VALUES ($1, $2, $3, $4) RETURNING id;',
            [otherPersonId, 'test2@example.com', 'portal', 'test-portal-2']
          );
        },
        async databaseTeardown(client) {
          await client.query(
            'DELETE FROM person WHERE id = $1',
            [personId]
          );
          await client.query(
            'DELETE FROM person WHERE id = $1',
            [otherPersonId]
          );
        },
        expectations(response) {
          expect(response.errors).toBeTruthy();
          expect(response.errors[0].message)
            .toMatch(/because no values you can update/);
          expect(response.data.updatePersonById).toBeNull();
        },
        personId,
        query: updatePersonByIdMutation,
        role: 'portal',
        variables: {
          id: otherPersonId,
          name: 'yes'
        },
      });
    });
  });

  describe('as a lawyer user', () => {
    it('returns the updated user when updating themself', async () => {
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
          expect(response.data.updatePersonById.person.id).toEqual(personId);
          expect(response.data.updatePersonById.person.name).toEqual('yes');
        },
        personId,
        query: updatePersonByIdMutation,
        role: 'lawyer',
        variables: {
          id: personId,
          name: 'yes'
        },
      });
    });

    it('returns an error when updating another user', async () => {
      const personId = faker.random.uuid();
      const otherPersonId = faker.random.uuid();

      await runGraphQLQuery({
        async databaseSetup(client) {
          await client.query(
            'INSERT INTO person (id, email, role, sub) ' +
            'VALUES ($1, $2, $3, $4) RETURNING id;',
            [personId, 'test@example.com', 'lawyer', 'test-lawyer']
          );
          await client.query(
            'INSERT INTO person (id, email, role, sub) ' +
            'VALUES ($1, $2, $3, $4) RETURNING id;',
            [otherPersonId, 'test2@example.com', 'lawyer', 'test-lawyer-2']
          );
        },
        async databaseTeardown(client) {
          await client.query(
            'DELETE FROM person WHERE id = $1',
            [personId]
          );
          await client.query(
            'DELETE FROM person WHERE id = $1',
            [otherPersonId]
          );
        },
        expectations(response) {
          expect(response.errors).toBeTruthy();
          expect(response.errors[0].message)
            .toMatch(/because no values you can update/);
          expect(response.data.updatePersonById).toBeNull();
        },
        personId,
        query: updatePersonByIdMutation,
        role: 'lawyer',
        variables: {
          id: otherPersonId,
          name: 'yes'
        },
      });
    });
  });

  describe('as an admin user', () => {
    it('returns the updated user when updating themself', async () => {
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
          expect(response.data.updatePersonById.person.id).toEqual(personId);
          expect(response.data.updatePersonById.person.name).toEqual('yes');
        },
        personId,
        query: updatePersonByIdMutation,
        role: 'admin',
        variables: {
          id: personId,
          name: 'yes'
        },
      });
    });

    it('returns the updated user when updating another user', async () => {
      const personId = faker.random.uuid();
      const otherPersonId = faker.random.uuid();

      await runGraphQLQuery({
        async databaseSetup(client) {
          await client.query(
            'INSERT INTO person (id, email, role, sub) ' +
            'VALUES ($1, $2, $3, $4) RETURNING id;',
            [personId, 'test@example.com', 'admin', 'test-admin']
          );
          await client.query(
            'INSERT INTO person (id, email, role, sub) ' +
            'VALUES ($1, $2, $3, $4) RETURNING id;',
            [otherPersonId, 'test2@example.com', 'lawyer', 'test-lawyer']
          );
        },
        async databaseTeardown(client) {
          await client.query(
            'DELETE FROM person WHERE id = $1',
            [personId]
          );
          await client.query(
            'DELETE FROM person WHERE id = $1',
            [otherPersonId]
          );
        },
        expectations(response) {
          expect(response.errors).toBeFalsy();
          expect(
            response.data.updatePersonById.person.id
          ).toEqual(otherPersonId);
          expect(response.data.updatePersonById.person.name).toEqual('yes');
        },
        personId,
        query: updatePersonByIdMutation,
        role: 'admin',
        variables: {
          id: otherPersonId,
          name: 'yes'
        },
      });
    });
  });
});
