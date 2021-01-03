/**
 * @jest-environment node
 */

import { describe, expect, it } from '@jest/globals';
import { default as sendSendgridEmail } from '../src/tasks/sendSendgridEmail';

describe('sending Sendgrid email', () => {
  it('sends an e-mail with the processed params', async () => {
    const payload = {
      subject: 'hello',
      text: 'hi there',
      // this e-mail is a test e-mail for verifying SendGrid messages
      to: 'neonlaw@sink.sendgrid.com',
    };
    const helpers = {
      logger: {
        error() {
          return true;
        },
        info() {
          return true;
        }
      }
    };

    const workerResponse = await sendSendgridEmail(payload, helpers);

    expect(workerResponse[0].statusCode).toEqual(202);
  });
});
