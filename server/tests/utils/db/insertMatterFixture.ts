
import * as faker from 'faker';

interface InsertMatterFixtureArgs {
  client: any;
  primaryContactId?: string;
  matterTemplateId?: string;
}

export const insertMatterFixture = async ({
  client,
  primaryContactId,
  matterTemplateId,
}: InsertMatterFixtureArgs) => {
  const uuid = faker.datatype.uuid();

  let matterTemplateIdForInsertingMatter;

  if (matterTemplateId) {
    matterTemplateIdForInsertingMatter = matterTemplateId;
  } else {
    const { rows: matterTemplateRows } = await client.query(
      'INSERT INTO matter_template (name, description) '+
          'VALUES ($1, $2) RETURNING (id)',
      ['delete-your-data', '{}']
    );
    matterTemplateIdForInsertingMatter = matterTemplateRows[0].id;
  }

  let primaryContactIdForInsertingMatter;

  if (primaryContactId) {
    primaryContactIdForInsertingMatter = primaryContactId;
  } else {
    const { rows: primaryContactRows } = await client.query(
      'INSERT INTO person (email, role, sub) ' +
          'VALUES ($1, $2, $3) RETURNING (id)',
      [`example-contact-${uuid}@neonlaw.com`, 'portal', `portal-${uuid}`]
    );
    primaryContactIdForInsertingMatter = primaryContactRows[0].id;
  }

  const { rows } = await client.query(
    'INSERT INTO matter (name, primary_contact_id, '+
          'matter_template_id) VALUES ($1, $2, $3) '+
          'RETURNING (id, primary_contact_id, matter_template_id)',
    [
      `Random matter ${uuid}`,
      primaryContactIdForInsertingMatter,
      matterTemplateIdForInsertingMatter
    ]
  );

  const { row } = rows[0];

  const id = row.split(',')[0].replace(/\(/, '');

  return { id };
};
