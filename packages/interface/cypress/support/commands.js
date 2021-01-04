/// <reference types="cypress" />
/* eslint-disable no-undef */

import decode from 'jwt-decode';

Cypress.Commands.add('loginAsPortalUser', () => {
  cy.log('Logging in as portal@sink.sendgrid.com');
  const clientId = Cypress.env('AUTH0_CLIENT_ID');
  const audience = 'https://api.neonlaw.com';
  const scope = 'openid profile email';

  const options = {
    body: {
      audience: audience,
      client_id: clientId,
      client_secret: Cypress.env('AUTH0_CLIENT_SECRET'),
      grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
      password: Cypress.env('PORTAL_USER_PASSWORD'),
      realm: 'Username-Password-Authentication',
      scope,
      username: 'portal@sink.sendgrid.com',
    },
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    url: Cypress.env('AUTH_URL'),
  };

  cy.request(options).then(({ body }) => {
    const { access_token, expires_in, id_token, token_type } = body;
    const [header, payload, signature] = id_token.split('.');
    const tokenData = decode(id_token);

    window.localStorage.setItem(
      `@@auth0spajs@@::${clientId}::${audience}::${scope}`,
      JSON.stringify({
        body: {
          access_token,
          audience,
          client_id: clientId,
          decodedToken: {
            claims: {
              __raw: id_token,
              ...tokenData
            },
            encoded: { header, payload, signature },
            header: {
              alg: 'RS256',
              typ: 'JWT'
            },
            user: tokenData
          },
          expires_in,
          id_token,
          scope,
          token_type,
        },
        expiresAt: Math.floor(Date.now() / 1000) + expires_in,
      })
    );
  });
});

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
    url: Cypress.env('AUTH_URL'),
  };

  cy.request(options).then(({ body }) => {
    const { access_token, expires_in, id_token, token_type } = body;
    const [header, payload, signature] = id_token.split('.');
    const tokenData = decode(id_token);

    window.localStorage.setItem(
      `@@auth0spajs@@::${clientId}::${audience}::${scope}`,
      JSON.stringify({
        body: {
          access_token,
          audience,
          client_id: clientId,
          decodedToken: {
            claims: {
              __raw: id_token,
              ...tokenData
            },
            encoded: { header, payload, signature },
            header: {
              alg: 'RS256',
              typ: 'JWT'
            },
            user: tokenData
          },
          expires_in,
          id_token,
          scope,
          token_type,
        },
        expiresAt: Math.floor(Date.now() / 1000) + expires_in,
      })
    );
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
