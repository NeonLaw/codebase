/* eslint-disable no-undef */
/// <reference types="cypress" />
/**
 * @param violations
 */
function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      description,
      id,
      impact,
      nodes: nodes.length,
    })
  );

  cy.task('table', violationData);
}

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(1000);
    cy.injectAxe();
  });
  it('Has no detectable accessibility violations on load', () => {
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: false },
        'link-name': { enabled: false },
        region: { enabled: false },
      }
    }, terminalLog);
    cy.contains('Switch to').click();
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: false },
        'link-name': { enabled: false },
        region: { enabled: false },
      }
    }, terminalLog);
  });
});
