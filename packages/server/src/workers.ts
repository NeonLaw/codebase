const { run } = require('graphile-worker');
import { postgresUrl } from './postgresUrl';
import { sendWelcomeEmail } from './tasks/sendWelcomeEmail';

/**
 * This function starts graphile-worker
 */
async function workers() {
  await run({
    concurrency: 5,
    connectionString: postgresUrl,
    noHandleSignals: false,
    pollInterval: 1000,
    taskList: {
      sendWelcomeEmail,
    }
  });
}

workers().catch((err) => {
  console.error(err);
  process.exit(1);
});
