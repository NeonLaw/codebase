import { Node } from 'slate';
const { WebClient } = require('@slack/web-api');

const convertSlateToPlaintext = (slateJson: any): string => {
  if (Array.isArray(slateJson)) {
    return slateJson.map(n => Node.string(n)).join('\n');
  }
  return '';
};

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
    'SELECT name, description FROM matters WHERE active = true;'
  );

  helpers.logger.info(JSON.stringify(matters));

  matters.forEach(async (matter) => {
    const description = convertSlateToPlaintext(matter.description);

    await web.chat.postMessage({
      channel: adminChannel,
      text: `${matter.name} - ${description}`,
    });
  });
};
