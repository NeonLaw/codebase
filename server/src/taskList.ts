import {
  addQuestionToEndOfQuestionnaire
} from './tasks/addQuestionToEndOfQuestionnaire';
import {
  addRelatedQuestionRelationship
} from './tasks/addRelatedQuestionRelationship';
import { createNeo4jRelationship } from './tasks/createNeo4jRelationship';
import { downloadLobLetters } from './tasks/downloadLobLetters';
import {
  saveDocumentInLongTermStorage
} from './tasks/saveDocumentInLongTermStorage';
import { sendLobLetter } from './tasks/sendLobLetter';
import { sendMatterDocumentEmail } from './tasks/sendMatterDocumentEmail';
import { slackReminders } from './tasks/slackReminders';
import {
  updateQuestionnaireFromNeo4j
} from './tasks/updateQuestionnaireFromNeo4j';
import { upsertQuestionToNeo4j } from './tasks/upsertQuestionToNeo4j';
import { upsertQuestionnaireToNeo4j } from './tasks/upsertQuestionnaireToNeo4j';

export const taskList = {
  addQuestionToEndOfQuestionnaire,
  addRelatedQuestionRelationship,
  createNeo4jRelationship,
  downloadLobLetters,
  saveDocumentInLongTermStorage,
  sendLobLetter,
  sendMatterDocumentEmail,
  slackReminders,
  updateQuestionnaireFromNeo4j,
  upsertQuestionToNeo4j,
  upsertQuestionnaireToNeo4j,
};
