/// <reference types="cypress" />
/* eslint-disable no-undef */

Cypress.Commands.add('login', ({ username, password }) => {
  cy.log(`Logging in as ${useranme}`);

  const client_id = Cypress.env('AUTH0_CLIENT_ID');
  const client_secret = Cypress.env('AUTH0_CLIENT_SECRET');
  const audience = 'https://api.neonlaw.com';
  const scope = 'openid profile email offline_access';
  const grant_type = 'http://auth0.com/oauth/grant-type/password-realm';
  const realm = 'Username-Password-Authentication';
  const url = 'https://neon-law-testing.auth0.com/oauth/token';

  const options = {
    body: {
      audience,
      client_id,
      client_secret,
      grant_type,
      password,
      realm,
      scope,
      username,
    },
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    url
  };

  cy.request(options).then(({ body }) => {
    cy.task('encrypt', body).then((encryptedSession) => {
      cy.setCookie('appSession', encryptedSession);
    });
  });
});


// commands.js
Cypress.Commands.add('getEditor', (selector) => {
  return cy.get(`${selector} [contenteditable]`)
    .click();
});

Cypress.Commands.add('typeInSlate', { prevSubject: true }, (subject, text) => {
  return cy.wrap(subject)
    .then(subject => {
      subject[0].dispatchEvent(
        new InputEvent('beforeinput', { data: text, inputType: 'insertText' })
      );
      return subject;
    });
});

Cypress.Commands.add('clearInSlate', { prevSubject: true }, (subject) => {
  return cy.wrap(subject)
    .then(subject => {
      subject[0].dispatchEvent(
        new InputEvent('beforeinput', { inputType: 'deleteHardLineBackward' })
      );
      return subject;
    });
});
