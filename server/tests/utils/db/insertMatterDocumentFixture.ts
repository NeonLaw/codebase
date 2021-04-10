interface  InsertMatterDocumentFixtureArgs {
  client: any;
  authorId: string;
  documentId: string;
  matterId: string;
}

export const insertMatterDocumentFixture = async ({
  client,
  documentId,
  authorId,
  matterId,
}: InsertMatterDocumentFixtureArgs) => {
  const { rows } = await client.query(
    'INSERT INTO matter_document (document_id, author_id, matter_id) '+
    'VALUES ($1, $2, $3) RETURNING (id)',
    [documentId, authorId, matterId]
  );

  return rows[0];
};
