# Neon Law Codebase [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Legaltech%20in%20the%20open.%20Check%20out%20%40NeonLaw%27s%20codebase%20repository%20for%20software%20and%20legal%20writing.&url=https://github.com/neonlaw/codebase)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![Maintainability](https://api.codeclimate.com/v1/badges/6e1cdb1d024d0f092903/maintainability)](https://codeclimate.com/github/NeonLaw/codebase/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6e1cdb1d024d0f092903/test_coverage)](https://codeclimate.com/github/NeonLaw/codebase/test_coverage)

This is a monorepo containing the following packages, some of which are
deployed to our staging and production environment.

|Package|Latest Version|Staging|Production|
|-------|--------------|-----------|-------|
|[@neonlaw/web](./web)|![NPM](https://img.shields.io/npm/v/@neonlaw/web)|deployed on pull requests by Vercel|latest `main` branch commit ([link](https://www.neonlaw.com))|
|[@neonlaw/server](./server)|![NPM](https://img.shields.io/npm/v/@neonlaw/server)|latest `main` branch commit ([link](https://api.neonlaw.net/graphiql))|v0.1.0 ([link](https://api.neonlaw.com/graphiql))|
|[@neonlaw/i18n](./i18n)|![NPM](https://img.shields.io/npm/v/@neonlaw/i18n)|n/a|n/a|
|[neon_nlp](./nlp_server)|![Crates.io](https://img.shields.io/crates/v/neon_nlp)|n/a|n/a|
|[git_flow](./git_flow)|![Crates.io](https://img.shields.io/crates/v/git_flow)|n/a|n/a|
|[neon_postgres](./postgres)|![RubyGems.Org](https://img.shields.io/gem/v/neon_postgres)|n/a|n/a|
|[neon_documents](./documents)|![RubyGems.Org](https://img.shields.io/gem/v/neon_documents)|n/a|n/a|
|[neon_email](./email)|![RubyGems.Org](https://img.shields.io/gem/v/neon_email)|n/a|n/a|
|[neon_diagrams](./diagrams)|![PyPi](https://img.shields.io/pypi/v/neon_diagrams)|n/a|n/a|
|[neon_schemas](./schemas)|![PyPi](https://img.shields.io/pypi/v/neon_schemas)![RubyGems.Org](https://img.shields.io/gem/v/neon_schemas)![NPM](https://img.shields.io/npm/v/@neonlaw/schemas)|n/a|n/a|

This repo also contains an `infrastructure` folder for managing cloud and
SaaS resources with Terraform and a `shell` folder containing our base docker
image, which contains all the libraries necessary to work on any of the above
packages.

## Developer Setup

The following instructions are for you if you intend to work on this repository.

### Git Flow

Our opinionated [git flow](./git_flow) is an essential part of working with this
repo. A series of continuous integration and deployment scripts will run
based on how you name your branches and your subsequent pull request to the
`main` branch. Please refer to the package or the `git_flow` CLI available from
crates.io for more information.

### Doppler Configuration

We use [Doppler](https://www.doppler.com/) for storing and sharing configuration
secrets like API keys. If you wish to work on the application, please email us
at support@neonlaw.com to request a Doppler account. Please refer to the
individual package README files for more information on how to use Doppler.

### Package Development

For each of our packages, consult the `README` file located in each top-level
directory of this repository. There, you will find instructions on how to
develop. We believe developing each in isolation is a great developer experience
because you should not have to load a bunch of stuff in your head whilst coding.

### Schemas

The `schemas` package is built in Python, Ruby, and Node and contains Avro
schemas for the messages that travel through our message bus, which is Google
Pub/Sub.

### Cloud SQL Proxy

If you need to access either the staging or production database on your local
machine, you can connect to it via Google Cloud SQL Proxy. First, ensure that
you have access to the `gcp` project in Doppler.  Then, you can connect to
`staging` and `production` with these respective commands:

```bash
doppler setup # choose the GCP project
yarn run copy-gcp-credentials
yarn run sql-proxy-staging
yarn run sql-proxy-production
```

The staging database runs at `localhost:5433` and the production database runs
at `localhost:5434`.

#### Copying Postgres Data from Production to Staging

To copy data from production to staging, run the following script:

```bash
doppler run -- bundle exec ruby lib/neon_postgres/inter_database_copy/copy.rb
```

This will copy data over from production to staging while anonymizing client
data so we can develop the app without exposing the attorney-client privilege of
the firm.

## Third-Party SaaS Services

To help us write into this repository and run our business, we use these
software:

- Auth0
- Casetext
- Code Climate
- Doppler
- G Suite
- GitHub
- Google Cloud Platform (GKE and Managed PostgreSQL)
- Grammarly
- Lexis Nexis
- Logflare
- Mercury Bank
- PGRita
- Postgraphile
- SendGrid
- Sentry
- Slack
- Terraform Cloud
- Transloadit
- Vercel
- Xero
- Zendesk Suite

## Legal

Copyright 2021 Neon Law. Licensed under the [Neon License](LICENSE.md). The Neon
License is the same as the Apache License Version 2 with the additional
disclaimer that nothing provided herein is legal advice.

Please contact us if you have any questions at support@neonlaw.com.
