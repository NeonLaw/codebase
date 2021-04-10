import { describe, expect, it } from '@jest/globals';
import {
  insertDocumentFixture,
  insertDocumentTemplateFixture,
  insertMatterDocumentFixture,
  insertMatterFixture,
  insertMatterTemplateFixture,
  insertPersonFixture,
  selectPortalPerson,
  startAnonymousSession,
  startLawyerSession,
  startPortalSession,
  withRootDb
} from '../../utils/dbHelpers';

describe('SELECT * FROM document;', () => {
  describe('an anonymous user', () => {
    it('cannot select document', () =>
      withRootDb(async (pgClient: any) => {
        await startAnonymousSession(pgClient);

        await expect(pgClient.query('select * from document;')).rejects.toThrow(
          /permission denied for table document/
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
        console.log('rar');
        const { id: ownMatterDocumentId } = await insertMatterDocumentFixture({
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
        const {
          id: otherMatterDocumentId
        } = await insertMatterDocumentFixture({
          authorId: primaryContactId,
          client,
          documentId: otherDocumentId,
          matterId: otherMatterId,
        });

        await startPortalSession(client);
        const { rows } = await client.query('select * from document;');

        console.log(rows);

        expect(rows).toHaveLength(1);
        expect(rows[0]).toMatch(ownMatterDocumentId);
        expect(rows[0]).not.toMatch(otherMatterDocumentId);
      })
    );
  });

  describe('a lawyer user', () => {
    it('can only select documents from matters they belong to', () =>
      withRootDb(async (pgClient: any) => {
        await startLawyerSession(pgClient);

        expect(pgClient.query('select * from document;')).rejects.toThrow(
          /permission denied for table document/
        );
      })
    );
  });

  // describe('a admin user', () => {
  //   it('can select all documents', () =>
  //     withRootDb(async (pgClient: any) => {
  //       await pgClient.query('DELETE FROM letter;');
  //       const { id: personId } = await insertPersonFixture(pgClient);
  //       const { id: addresseeId } = await insertAddressFixture({
  //         client: pgClient,
  //         personId
  //       });
  //       const { id: addressorId } = await insertAddressFixture({
  //         client: pgClient,
  //         personId
  //       });

  //       await insertLetterFixture({
  //         addresseeId,
  //         addressorId,
  //         client: pgClient,
  //       });

  //       await startAdminSession(pgClient);

  //       const { rows } = await pgClient.query('select * from letter;');

  //       expect(rows).toHaveLength(1);
  //     })
  //   );
  // });
});
