/// <reference types="cypress" />
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/camelcase */
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

Cypress.Commands.add(
  'loginAsPortalUser',
  () => {
    cy.log('Logging in as portal@neonlaw.com');
    const options = {
      body: {
        'audience': 'https://api.neonlaw.com',
        'client_id': Cypress.env('AUTH_CLIENT_ID'),
        'client_secret': Cypress.env('AUTH_CLIENT_SECRET'),
        'grant_type': 'http://auth0.com/oauth/grant-type/password-realm',
        'password': Cypress.env('PORTAL_USER_PASSWORD'),
        realm: 'Username-Password-Authentication',
        'scope': 'openid profile email',
        'username': 'portal@neonlaw.com',
      },
      method: 'POST',
      url: Cypress.env('AUTH_URL'),
    };
    cy.request(options).then(({ body }) => {
      const { access_token, expires_in, id_token } = body;

      cy.server();

      // intercept Auth0 request for token and return what we have
      cy.route({
        method: 'POST',
        response: {
          access_token: access_token,
          expires_in: expires_in,
          id_token: id_token,
          scope: 'openid profile email',
          token_type: 'Bearer',
        },
        url: 'oauth/token',
      });
      // Auth0 SPA SDK will check for value in cookie to get appState
      // add validate nonce (which has been removed for simplicity)
      const stateId = 'test';
      cy.setCookie(
        `a0.spajs.txs.${stateId}`,
        encodeURIComponent(JSON.stringify({
          'appState': { targetUrl: '/' },
          'audience': 'default',
          'redirect_uri': 'http://127.0.0.1:8000',
          'scope': 'openid profile email',
        }))
      ).then(() => {
        cy.visit(`/?code=test&state=${stateId}`);
      });
    });
  }
);
