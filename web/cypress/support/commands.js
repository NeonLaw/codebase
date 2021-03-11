/// <reference types="cypress" />
/* eslint-disable no-undef */

Cypress.Commands.add('loginAsAdminUser', () => {
  cy.log('Logging in as admin@sink.sendgrid.com');
  const clientId = Cypress.env('AUTH0_CLIENT_ID');
  const audience = 'https://api.neonlaw.com';
  const scope = 'openid profile email';

  const options = {
    body: {
      audience: audience,
      client_id: clientId,
      client_secret: Cypress.env('AUTH0_CLIENT_SECRET'),
      grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
      password: Cypress.env('ADMIN_USER_PASSWORD'),
      realm: 'Username-Password-Authentication',
      scope,
      username: 'admin@sink.sendgrid.com',
    },
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    url: 'https://neon-law-testing.auth0.com/oauth/token'
  };

  cy.request(options).then(({ body }) => {
    const { access_token } = body;

    // const cookieStore = new CookieStore({
    //   secret: '92057A30-82D3-47D8-809F-C3805F9CE250'
    // });

    // const encryptedCookie = cookieStore.encrypt(access_token);

    // cy.setCookie('appSession', encryptedCookie);

    // This code is wrong because it does not encrypt the cookie
    cy.setCookie('appSession', access_token);
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
