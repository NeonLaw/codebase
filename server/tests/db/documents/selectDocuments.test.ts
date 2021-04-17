import { describe, expect, it } from '@jest/globals';
import {
  insertDocumentFixture,
  insertDocumentTemplateFixture,
  insertMatterDocumentFixture,
  insertMatterFixture,
  insertMatterTemplateFixture,
  insertPersonFixture,
  selectAdminPerson,
  selectPortalPerson,
  startAdminSession,
  startAnonymousSession,
  startPortalSession,
  withRootDb
} from '../../utils/dbHelpers';

describe('SELECT * FROM matter_document;', () => {
  describe('an anonymous user', () => {
    it('cannot select document', () =>
      withRootDb(async (pgClient: any) => {
        await startAnonymousSession(pgClient);

        await expect(
          pgClient.query('select * from matter_document;')
        ).rejects.toThrow(
          /permission denied for table matter_document/
        );
      })
    );
  });

  describe('a portal user', () => {
    it('can only select documents from matters they belong to', () =>
      withRootDb(async (client: any) => {
        const { id: primaryContactId } = await selectPortalPerson({ client });

        const {
          id: documentTemplateId
        } = await insertDocumentTemplateFixture({ client });

        const {
          id: matterTemplateId
        } = await insertMatterTemplateFixture({ client });

        const {
          id: ownDocumentTemplateId
        } = await insertDocumentTemplateFixture({ client });
        const { id: ownDocumentId } = await insertDocumentFixture({
          client,
          documentTemplateId: ownDocumentTemplateId
        });
        const { id: ownMatterId } = await insertMatterFixture({
          client,
          matterTemplateId,
          primaryContactId
        });
        const {id: ownMatterDocumentId } = await insertMatterDocumentFixture({
          authorId: primaryContactId,
          client,
          documentId: ownDocumentId,
          matterId: ownMatterId,
        });

        const { id: otherPersonId } = await insertPersonFixture({ client });
        const { id: otherDocumentId } = await insertDocumentFixture({
          client,
          documentTemplateId
        });
        const { id: otherMatterId } = await insertMatterFixture({
          client,
          primaryContactId: otherPersonId
        });
        const {id: otherMatterDocumentId } = await insertMatterDocumentFixture({
          authorId: primaryContactId,
          client,
          documentId: otherDocumentId,
          matterId: otherMatterId,
        });

        await startPortalSession(client);
        const { rows } = await client.query('select * from matter_document;');

        expect(rows).toHaveLength(1);
        expect(JSON.stringify(rows)).toMatch(ownMatterDocumentId);
        expect(JSON.stringify(rows)).not.toMatch(otherMatterDocumentId);
      })
    );
  });

  describe('a admin user', () => {
    it('can select all documents', () =>
      withRootDb(async (client: any) => {
        const { id: primaryContactId } = await selectAdminPerson({ client });

        const {
          id: documentTemplateId
        } = await insertDocumentTemplateFixture({ client });

        const {
          id: matterTemplateId
        } = await insertMatterTemplateFixture({ client });

        const {
          id: ownDocumentTemplateId
        } = await insertDocumentTemplateFixture({ client });
        const { id: ownDocumentId } = await insertDocumentFixture({
          client,
          documentTemplateId: ownDocumentTemplateId
        });
        const { id: ownMatterId } = await insertMatterFixture({
          client,
          matterTemplateId,
          primaryContactId
        });
        const {id: ownMatterDocumentId } = await insertMatterDocumentFixture({
          authorId: primaryContactId,
          client,
          documentId: ownDocumentId,
          matterId: ownMatterId,
        });

        const { id: otherPersonId } = await insertPersonFixture({ client });
        const { id: otherDocumentId } = await insertDocumentFixture({
          client,
          documentTemplateId
        });
        const { id: otherMatterId } = await insertMatterFixture({
          client,
          primaryContactId: otherPersonId
        });
        const {id: otherMatterDocumentId } = await insertMatterDocumentFixture({
          authorId: primaryContactId,
          client,
          documentId: otherDocumentId,
          matterId: otherMatterId,
        });

        await startAdminSession(client);
        const { rows } = await client.query('select * from matter_document;');

        expect(rows).toHaveLength(2);
        expect(JSON.stringify(rows)).toMatch(ownMatterDocumentId);
        expect(JSON.stringify(rows)).toMatch(otherMatterDocumentId);
      })
    );
  });
});
