import { default as sgMail } from '@sendgrid/mail';

export const sendWelcomeEmail = async (payload, helpers): Promise<void> => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
  const { personId } = payload;

  const personQuery = await helpers.query(
    'SELECT id, email FROM person WHERE id = $1 LIMIT 1',
    [personId]
  );
  const person = personQuery.rows[0];

  const to = person.email;
  const subject = 'Welcome to Neon Law';

  const emailMessage = {
    from: 'support@neonlaw.com',
    html: '<p>Welcome to Neon Law! Contact us at anytime by responding to ' +
      'this email.</p>',
    subject,
    text: 'Welcome to Neon Law! Contact us at anytime by responding to ' +
      'this email.',
    to,
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
};
