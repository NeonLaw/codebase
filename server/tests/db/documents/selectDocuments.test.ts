import { describe, expect, it } from '@jest/globals';
import {
//   insertDocumentFixture,
//   insertDocumentTemplateFixture,
//   insertMatterDocumentFixture,
//   insertMatterFixture,
//   insertPersonFixture,
//   startAdminSession,
  startAnonymousSession,
  //   startLawyerSession,
  //   startPortalSession,
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

  //   describe('a portal user', () => {
  //     it('can only select documents from matters they belong to', () =>
  //       withRootDb(async (pgClient: any) => {
  //         const {
  // id: currentPersonId  } = await startPortalSession(pgClient);

  //         const {
  //           id: documentTemplateId
  //         } = await insertDocumentTemplateFixture();

  //         const {
  //           id: ownDocumentId
  //         } = await insertDocumentTemplateFixture({ documentTemplateId });
  //         const { id: ownMatterId } = await insertMatterFixture({
  //           primaryContactId: currentPersonId
  //         });
  //         const {
  // id: ownMatterDocumentId } = await insertMatterDocumentFixture({
  //           documentId: ownDocumentId,
  //           matterId: ownMatterId,
  //         });

  //         const {
  //           id: otherDocumentId
  //         } = await insertDocumentTemplateFixture({ documentTemplateId });
  //         const { id: otherMatterId } = await insertMatterFixture({
  //           primaryContactId: currentPersonId
  //         });
  //         const {
  //           id: otherMatterDocumentId
  //         } = await insertMatterDocumentFixture({
  //           documentId: otherDocumentId,
  //           matterId: otherMatterId,
  //         });

  //         const { rows } = await pgClient.query('select * from document;');

  //         console.log(rows);

  //         expect(rows).toHaveLength(1);
  //         expect(rows[0]).toMatch(ownMatterDocumentId);
  //         expect(rows[0]).not.toMatch(otherMatterDocumentId);
  //       })
  //     );
  //   });

  //   describe('a lawyer user', () => {
  //     it('can only select documents from matters they belong to', () =>
  //       withRootDb(async (pgClient: any) => {
  //         await startLawyerSession(pgClient);

  //         await
  // expect(pgClient.query('select * from letter;')).rejects.toThrow(
  //           /permission denied for table letter/
  //         );
  //       })
  //     );
  //   });

  //   describe('a admin user', () => {
  //     it('can select all documents', () =>
  //       withRootDb(async (pgClient: any) => {
  //         await pgClient.query('DELETE FROM letter;');
  //         const { id: personId } = await insertPersonFixture(pgClient);
  //         const { id: addresseeId } = await insertAddressFixture({
  //           client: pgClient,
  //           personId
  //         });
  //         const { id: addressorId } = await insertAddressFixture({
  //           client: pgClient,
  //           personId
  //         });

  //         await insertLetterFixture({
  //           addresseeId,
  //           addressorId,
  //           client: pgClient,
  //         });

  //         await startAdminSession(pgClient);

  //         const { rows } = await pgClient.query('select * from letter;');

//         expect(rows).toHaveLength(1);
//       })
//     );
//   });
});
