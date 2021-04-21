import { default as sgMail } from '@sendgrid/mail';

export const sendMatterDocumentEmail = async (
  payload,
  helpers
): Promise<void> => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  const { matterDocumentId } = payload;

  const { rows } = await helpers.query(
    'SELECT d.id as documentId, '+
    'p.email as email, '+
    'm.id as matterId, '+
    'mt.category as matterTemplateCategory '+
    'FROM document d ' +
    'INNER JOIN matter_document md ON (md.document_id = d.id) ' +
    'INNER JOIN matter m ON (md.matter_id = m.id) ' +
    'INNER JOIN matter_template mt ON (m.matter_template_id = mt.id) ' +
    'LEFT JOIN matter_contact mc ON (mc.matter_id = m.id) ' +
    'INNER JOIN person p ON '+
    '(m.primary_contact_id = p.id OR mc.contact_id = p.id) ' +
    'WHERE md.id = $1',
    [matterDocumentId]
  );

  const {
    matterTemplateCategory,
    matterId,
  } = rows[0];

  const recipients = new Set();

  for (const row of rows) {
    const { email } = row;

    if (!recipients.has(email)) {
      recipients.add(email);
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
