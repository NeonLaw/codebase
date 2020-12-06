
import * as faker from 'faker';

interface CreateMatterArgs {
  client: any;
  primaryContactId?: string;
  matterTemplateId?: string;
}

export const createMatter = async ({
  client,
  primaryContactId,
  matterTemplateId,
}: CreateMatterArgs) => {
  const uuid = faker.random.uuid();

  let matterTemplateIdForInsertingMatter;

  if (matterTemplateId) {
    matterTemplateIdForInsertingMatter = matterTemplateId;
  } else {
    const { rows: matterTemplateRows } = await client.query(
      'INSERT INTO matter_template (name, javascript_module) '+
          'VALUES ($1, $2) RETURNING (id)',
      [`delete-your-data-${uuid}`, `deleteYourData-${uuid}`]
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

  return rows[0].row;
};
