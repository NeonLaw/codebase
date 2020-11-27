import { default as sgMail } from '@sendgrid/mail';

const sendSendgridEmail = async (payload, helpers) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const { to, subject, text } = payload;

  const emailMessage = {
    from: 'support@neonlaw.com',
    html: `<h1>${text}</h1>`,
    subject,
    text,
    to,
  };

  return await sgMail.send(emailMessage).then((response) => {
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

export default sendSendgridEmail;
