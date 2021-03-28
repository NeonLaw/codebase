const { WebClient } = require('@slack/web-api');

export const slackReminders = async (_, helpers) => {
  helpers.logger.info('Sending Slack Reminders');

  const apiCredential = process.env.NEON_BOT_SLACK_TOKEN as string;
  const environment = process.env.ENVIRONMENT as string;
  const web = new WebClient(apiCredential);

  const adminChannel = 'C01SN886GHZ';

  const { rows: matters } = await helpers.query(
    'SELECT (name, description) FROM matter;'
  );

  helpers.logger.info(JSON.stringify(matters.rows));

  matters.forEach(async (matter) => {
    await web.chat.postMessage({
      channel: adminChannel,
      text: `${environment} ${matter.row}`,
    });
  });
};
