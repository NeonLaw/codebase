import { default as sgMail } from '@sendgrid/mail';

export const sendMatterDocumentEmail = async (
  payload,
  helpers
): Promise<void> => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  const { matterDocumentId } = payload;

  const { rows } = await helpers.query(
    'SELECT p.email as email, '+
    'm.id as matter, '+
    'd.filename as filename, '+
    'mt.category as category '+
    'FROM matter_documents md ' +
    'INNER JOIN documents d ON (md.document_id = d.id) ' +
    'INNER JOIN matters m ON (md.matter_id = m.id) ' +
    'INNER JOIN matter_templates mt ON (m.matter_template_id = mt.id) ' +
    'LEFT JOIN matter_contacts mc ON (mc.matter_id = m.id) ' +
    'INNER JOIN people p ON '+
    '(m.primary_contact_id = p.id OR mc.contact_id = p.id) ' +
    'WHERE md.id = $1',
    [matterDocumentId]
  );

  const {
    category,
    matter,
    filename,
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
      html: `<p>We uploaded a new document, ${filename} to your matter. `+
        'To view it, please visit '+
        `https://www.neonlaw.com/portal/${category}/${matter}.</p>`,
      subject,
      text: `We uploaded a new document, ${filename}. To view it, please `+
        `visit https://www.neonlaw.com/portal/${category}/${matter}.`,
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
