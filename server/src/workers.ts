import 'dotenv/config';
import {
  addQuestionToEndOfQuestionnaire,
  addRelatedQuestionRelationship,
  createNeo4jRelationship,
  downloadLobLetters,
  saveDocumentInLongTermStorage,
  sendLobLetter,
  sendMatterDocumentEmail,
  sendWelcomeEmail,
  slackReminders,
  updateQuestionnaireFromNeo4j,
  upsertQuestionToNeo4j,
  upsertQuestionnaireToNeo4j,
} from './tasks';
import { default as neo4j } from 'neo4j-driver';
import { postgresUrl } from './postgresUrl';
import { run } from 'graphile-worker';
import { default as sgMail } from '@sendgrid/mail';

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
    crontabFile: `${__dirname}/crontab.txt`,
    noHandleSignals: false,
    pollInterval: 1000,
    taskList: {
      addQuestionToEndOfQuestionnaire,
      addRelatedQuestionRelationship,
      createNeo4jRelationship,
      downloadLobLetters,
      saveDocumentInLongTermStorage,
      sendLobLetter,
      sendMatterDocumentEmail,
      sendWelcomeEmail,
      slackReminders,
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
