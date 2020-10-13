/// <reference types="cypress" />
/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add(
// "drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add(
// "dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import jwtDecode from 'jwt-decode';

Cypress.Commands.add('loginAsPortalUser', () => {
  cy.log('Logging in as portal@neonlaw.com');
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
      scope: scope,
      username: 'portal@neonlaw.com',
    },
    method: 'POST',
    url: Cypress.env('AUTH_URL'),
  };

  cy.request(options).then(({ body }) => {
    const { access_token, expires_in, id_token } = body;
    const key = `@@auth0spajs@@::${clientId}::${audience}::${scope}`;

    cy.server();

    const auth0Cache = {
      body: {
        access_token,
        client_id: clientId,
        decodedToken: {
          user: jwtDecode(id_token),
        },
        expires_in,
        id_token,
        scope,
      },
      expiresAt: Math.floor(Date.now() / 1000) + expires_in,
    };
    window.localStorage.setItem(key, JSON.stringify(auth0Cache));
  });
});

Cypress.Commands.add('loginAsAdminUser', () => {
  cy.log('Logging in as admin@neonlaw.com');
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
      scope: scope,
      username: 'admin@neonlaw.com',
    },
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    url: Cypress.env('AUTH_URL'),
  };

  cy.request(options).then(({ body }) => {
    const { access_token, expires_in, id_token } = body;
    const key = `@@auth0spajs@@::${clientId}::${audience}::${scope}`;

    cy.server();

    const auth0Cache = {
      body: {
        access_token,
        client_id: clientId,
        decodedToken: {
          user: jwtDecode(id_token),
        },
        expires_in,
        id_token,
        scope,
      },
      expiresAt: Math.floor(Date.now() / 1000) + expires_in,
    };
    window.localStorage.setItem(key, JSON.stringify(auth0Cache));
  });
});
