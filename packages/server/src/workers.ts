import Redis from 'ioredis';
import { getLeakyBucketRateLimiter } from 'graphile-worker-rate-limiter';
import { postgresUrl } from './postgresUrl';
import { redisUrl } from './redisUrl';
import { run } from 'graphile-worker';
import { sendWelcomeEmail } from './tasks/sendWelcomeEmail';

const redis = new Redis(redisUrl);
const rateLimiter = getLeakyBucketRateLimiter({
  bucketTypes: {
    sendLobMail: {
      capacity: 100,
      drainCount: 500,
      drainInterval: 15 * 1000,
    },
    sendSendgridEmail: {
      capacity: 1000,
      drainCount: 1500,
      drainInterval: 30 * 1000,
    },
  },
  redis,
});

/**
 * This function starts graphile-worker
 */
async function workers() {
  await run({
    concurrency: 5,
    connectionString: postgresUrl,
    forbiddenFlags: rateLimiter.getForbiddenFlags,
    noHandleSignals: false,
    pollInterval: 1000,
    taskList: {
      sendWelcomeEmail: rateLimiter.wrapTask(sendWelcomeEmail),
    }
  });
}

workers().catch((err) => {
  console.error(err);
  process.exit(1);
});
