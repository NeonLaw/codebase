import 'dotenv/config';

import { postgresUrl } from './postgresUrl';
import { run } from 'graphile-worker';
import { default as sgMail } from '@sendgrid/mail';
import { taskList } from './taskList';

/**
 * This function starts graphile-worker
 */
async function workers() {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  await run({
    concurrency: 5,
    connectionString: postgresUrl,
    crontabFile: `${__dirname}/crontab.txt`,
    noHandleSignals: false,
    pollInterval: 1000,
    taskList,
  });
}

workers().catch((err) => {
  console.error(err);
  process.exit(1);
});
