import 'dotenv/config';
import {
  addQuestionToEndOfQuestionnaire,
  addRelatedQuestionRelationship,
  createNeo4jRelationship,
  saveDocumentInLongTermStorage,
  sendWelcomeEmail,
  updateQuestionnaireFromNeo4j,
  upsertQuestionToNeo4j,
  upsertQuestionnaireToNeo4j,
} from './tasks';
import Redis from 'ioredis';
import { getLeakyBucketRateLimiter } from 'graphile-worker-rate-limiter';
import { default as neo4j } from 'neo4j-driver';
import { postgresUrl } from './postgresUrl';
import { redisUrl } from './redisUrl';
import { run } from 'graphile-worker';
import { default as sgMail } from '@sendgrid/mail';

const redis = new Redis(redisUrl);
const rateLimiter = getLeakyBucketRateLimiter({
  bucketTypes: {
    sendLobMail: {
      capacity: 100,
      drainCount: 500,
      drainInterval: 15 * 1000,
    },
    sendWelcomeEmail: {
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
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  const driver = neo4j.driver(
    process.env.NEO4J_URL as string,
    neo4j.auth.basic('neo4j', 'graphs')
  );
  const session = driver.session();

  await session.run('CREATE DATABASE questionnaires IF NOT EXISTS');

  await run({
    concurrency: 5,
    connectionString: postgresUrl,
    forbiddenFlags: rateLimiter.getForbiddenFlags,
    noHandleSignals: false,
    pollInterval: 1000,
    taskList: {
      addQuestionToEndOfQuestionnaire,
      addRelatedQuestionRelationship,
      createNeo4jRelationship,
      saveDocumentInLongTermStorage,
      sendWelcomeEmail: rateLimiter.wrapTask(sendWelcomeEmail),
      updateQuestionnaireFromNeo4j,
      upsertQuestionToNeo4j,
      upsertQuestionnaireToNeo4j,
    }
  });
}

workers().catch((err) => {
  console.error(err);
  process.exit(1);
});
