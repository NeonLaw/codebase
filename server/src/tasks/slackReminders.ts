const { WebClient } = require('@slack/web-api');

export const slackReminders = async (_, helpers) => {
  const apiCredential = process.env.NEON_BOT_SLACK_TOKEN as string;
  const environment = process.env.ENVIRONMENT as string;

  if (environment !== 'production') {
    return;
  }
  const web = new WebClient(apiCredential);

  const adminChannel = 'C01SN886GHZ';

  helpers.logger.info('Sending Production Matter Reminders');
  await web.chat.postMessage({
    channel: adminChannel,
    text: 'The following matters require your attention.',
  });

  const { rows: matters } = await helpers.query(
    'SELECT (name, description) FROM matter WHERE active = true;'
  );

  helpers.logger.info(JSON.stringify(matters.rows));

  matters.forEach(async (matter) => {
    await web.chat.postMessage({
      channel: adminChannel,
      text: `${matter.row}`,
    });
  });
};
