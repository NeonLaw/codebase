# Neon Law Interface

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
[![Maintainability](https://api.codeclimate.com/v1/badges/a9de7883f94a89b722a5/maintainability)](https://codeclimate.com/github/NeonLaw/interface/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a9de7883f94a89b722a5/test_coverage)](https://codeclimate.com/github/NeonLaw/interface/test_coverage)
[![Continuous Integration](https://github.com/NeonLaw/interface/workflows/continuous_integration/badge.svg)](https://github.com/NeonLaw/interface/actions?query=workflow%3Acontinuous_integration)
[![Staging](https://github.com/neonlaw/interface/workflows/staging/badge.svg)](https://github.com/NeonLaw/interface/actions?query=workflow%3Astaging)
[![Production](https://github.com/neonlaw/interface/workflows/production/badge.svg)](https://github.com/NeonLaw/interface/actions?query=workflow%3Aproduction)

> Served at https://www.neonlaw.com (neonlaw.net for staging)

## Running Locally

You must have node installed on your machine and yarn as a global node package.

```bash
yarn
yarn e2e-test
```

Then navigate to `http://127.0.0.1:8000` to see the website ran on your
machine. We recommend starting the development server with `e2e-test` because
all actions should have a corresponding Cypress test.

> You must be connected to the Internet to work on this application.

## Authentication

This application uses Auth0 with two tenants, one for staging/testing, and
one for our production account. The staging account has the following
accounts, please contact us at engineering@neonlaw.com should you need to
access Neon Law as a user.

* portal@neonlaw.com, a user with portal permissions
* lawyer@neonlaw.com, a user with lawyer permissions
* admin@neonlaw.com, a user with admin permissions

## Working on this Repo

We welcome any contributions to this repo and are humbled you would dedicate
the time to improve this project. To create a PR to this repo, please do the
following:

* Fork this repo
* Create a PR to the `development` branch

By making a PR, you consent that all resultant code shall be open sourced
under the same Apache License Version 2.0 that this repo is.

## Autogenerating server methods

We use `graphql-codegen` to generate automatic functions for I/O to our
backend, api.neonlaw.com (or api.neonlaw.net) for Apollo Client.

To update the latest API methods based off the server you can run this from
the terminal.

```
yarn graphql-codegen
```

## Third Party SaaS Services

This application uses:

* Zendesk Chat to host chat with visitors
* Google Analytics for data collection
* Google Maps JavaScript API

## Staging Environment

The staging environment is hosted at https://www.neonlaw.net has a layer of
HTTP Basic authentication, to get those credentials, please contact us at
support@neonlaw.com.

Then enter in the password when prompted.

## Legal

Copyright 2020 Neon Law. Licensed under the [Apache License Version
2.0](https://www.apache.org/licenses/LICENSE-2.0.txt).
