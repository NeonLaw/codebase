import { run } from 'graphile-worker';
import { redisUrl } from './redisUrl';
import { postgresUrl } from './postgresUrl';
import { sendWelcomeEmail } from './tasks/sendWelcomeEmail';
import Redis from 'ioredis';
import { getLeakyBucketRateLimiter } from 'graphile-worker-rate-limiter';

const redis = new Redis(redisUrl);
const rateLimiter = getLeakyBucketRateLimiter({
  redis,
  bucketTypes: {
    'sendSendgridEmail': {
      capacity: 1000,
      drainInterval: 30 * 1000,
      drainCount: 1500,
    },
    'sendLobMail': {
      capacity: 100,
      drainCount: 500,
      drainInterval: 15 * 1000,
    },
  }
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
