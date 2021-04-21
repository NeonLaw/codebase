import { default as sgMail } from '@sendgrid/mail';

export const sendDocumentEmail = async (payload, helpers): Promise<void> => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  const { documentId } = payload;

  const documentQuery = await helpers.query(
    'SELECT d.id as documentId, '+
    'mc.email as matterContactEmail, '+
    'p.email as primaryContactEmail, '+
    'm.id as matterId, '+
    'mt.category as matterTemplateCategory, '+
    'FROM document d' +
    'INNER JOIN matter_document md ON (md.document_id = d.id)' +
    'INNER JOIN matter m ON (md.matter_id = m.id)' +
    'INNER JOIN matter_template mt ON (m.matter_template_id = mt.id)' +
    'INNER JOIN person p ON (m.primary_contact_id = p.id)' +
    'LEFT JOIN matter_contact mc ON (mc.matter_id = m.id)' +
    'WHERE d.id = $1',
    [documentId]
  );
  const { rows } = documentQuery;

  const {
    matterTemplateCategory,
    matterId,
    primaryContactEmail
  } = rows[0];

  const recipients = new Set();
  recipients.add(primaryContactEmail);

  for (const row of rows) {
    const { matterContactEmail } = row;

    if (!recipients.has(matterContactEmail)) {
      recipients.add(matterContactEmail);
    }
  }

  ([...recipients] as string[]).forEach(async (recipientEmail: string) => {
    const subject = 'New Document Uploaded';
    const emailMessage = {
      from: 'support@neonlaw.com',
      html: '<p>We uploaded a new document. To download it, please visit '+
    `https://www.neonlaw.com/portal/${matterTemplateCategory}/${matterId}.</p>`,
      subject,
      text: 'We uploaded a new document. To download it, please visit '+
    `https://www.neonlaw.com/portal/${matterTemplateCategory}/${matterId}.`,
      to: recipientEmail,
    };
    await sgMail.send(emailMessage).then((response) => {
      helpers.logger.info(response);
      return response;
    }).catch((error) => {
      const errorBody = error?.response?.body;
      if (errorBody) {
        helpers.logger.error(errorBody);
      }

      throw error;
    });
  });
};
