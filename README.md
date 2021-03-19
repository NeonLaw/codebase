# Neon Law Codebase [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Legaltech%20in%20the%20open.%20Check%20out%20%40NeonLaw%27s%20codebase%20repository%20for%20software%20and%20legal%20writing.&url=https://github.com/neonlaw/codebase)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![Maintainability](https://api.codeclimate.com/v1/badges/6e1cdb1d024d0f092903/maintainability)](https://codeclimate.com/github/NeonLaw/codebase/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6e1cdb1d024d0f092903/test_coverage)](https://codeclimate.com/github/NeonLaw/codebase/test_coverage)

This is a monorepo containing the following packages, some of which are
deployed to our staging and production environment.

|Package|Latest Version|Staging|Production|
|-------|--------------|-----------|-------|
|[Web](./web)|0.1.0|[latest](https://www.neonlaw.net)|[latest](https://www.neonlaw.com)|
|[Server](./server)|0.1.0|[latest](https://api.neonlaw.net)|[latest](https://api.neonlaw.com)|
|[i18n](./i18n)|0.1.0|n/a|n/a|
|[Neon NLP](./neon_nlp)|![Crates.io](https://img.shields.io/crates/v/neon_nlp)|n/a|n/a|
|[Git Flow](./git_flow)|![Crates.io](https://img.shields.io/crates/v/git_flow)|n/a|n/a|

This repo also contains an `infrastructure` folder for managing cloud and
SaaS resources with Terraform.

## Developer Setup

We use [Doppler](https://www.doppler.com/) for storing and sharing configuration
secrets like API keys. If you wish to work on the application, please email us
at support@neonlaw.com to request test credentials.

## Git Flow

Our opinionated [git flow](./git_flow) is an essential part of working with this
repo. A series of continuous integration and deployment scripts will run
based on how you name your branches and your subsequent pull request to the
`main` branch.

|Branch Name|CI/CD Effect|
|--|--|
|feature/|Tests will run, Changelog diff is required|
|release/|Tests will run, Changelog diff (add the next verion), release github action is ran|
|bugfix/|Tests will run, Changelog diff (add the next verion), release github action is ran, patch version required|

## Web Development

For developing the website you can do so locally and speak to our staging
GraphQL server. To spin up a web server, enter the following commands.

```bash
yarn
doppler setup # staging
doppler run -- yarn workspace @neonlaw/web dev
```

### Dockerized Setup (recommended for full-stack development)

We recommend developing with a containerized setup that best mimic our staging
and production process. If you have docker and docker-compose installed on
your machine, you can follow these two steps to start developing.

1. Start Docker Compose

```bash
doppler setup # development
doppler run -- docker-compose up
```

This starts the following containers:

- A shell container that you can use via `docker exec -it shell /bin/bash`
- Database Servers for:
  - Postgres
  - Neo4j
  - Elasticsearch
  - Kafka
- Web Servers for:
  - our website (http://127.0.0.1:8000)
  - our API (http://127.0.0.1:3000/graphiql)
- Processing Servers for Kafka messages:
  - Document Formatting
  - Grammar Formatting
  - Filings

You can start a subset of services with Docker Compose if you do not need to
run all of the applications. For instance, if you just wanted to start the
API server and the shell container it depends on, you could run:

```
docker-compose up postgres api
```

if you just wanted a shell environment, you could run:

```
docker-compose exec -it shell /bin/bash
```

and if you just wanted a just the interface environment, you could run:

```
docker-compose up interface
```

This will start the `shell`, `postgres`, `api`, and `interface` containers.

3. VSCode settings (optional)

If you don't already have a favorite editor, we recommend [VSCode by
Microsoft](https://code.visualstudio.com/). Using VSCode with Docker Compose
as outlined in the previous step, you can edit files directly in the `shell`
container. By doing so, you don't need to install _anything_ on your host
machine except for Docker, as Node, Python, Postgres, and anything else we
may add in the future will all run within Docker containers managed by Docker
Compose.

To edit within a container, [follow this
tutorial](https://code.visualstudio.com/docs/remote/containers), which
assumes that you have the `Remote - Containers` extension installed. Then
after starting `docker-compose up`, you can attach to the `shell` container,
which already has node, psql, and python, with our third-party libraries, and
required environment variables, ready for you. The biggest advantage of
developing this way is establishing parity between your machine and our
staging and production environments - we want to eliminate the "works on my
machine" excuse from our organization.

## Third-Party SaaS Services

To help us write into this repository and run our business, we use these
software:

- Auth0
- Casetext
- Code Climate
- Doppler
- GitHub
- Google Cloud Platform (GKE and Managed PostgreSQL)
- Google Workplace
- Grammarly
- Lexis Nexis
- Logflare
- Mercury Bank
- PGRita
- Postgraphile
- Segment
- SendGrid
- Sentry
- Slack
- Terraform Cloud
- Transloadit
- Vercel
- Xero
- Zendesk Suite

## Graphql Codegen

You can run `yarn graphql-codegen` to auto-generate server I/O methods in
JavaScript.

## Cloud SQL Proxy

If you need to access either the staging or production database on your local
machine, you can connect to it via Google Cloud SQL Proxy. Before connecting,
please ensure the Public IP is turned on for these instances (by default they're
turned off).

Then, you can connect to `staging` and `production` with these respective
commands:

```
doppler run -- yarn run sql-proxy-staging
doppler run -- yarn run sql-proxy-production
```

With either command (both cannot be ran at the same time), you'll have a
PostgreSQL database running at `127.0.0.1:5432`, which you can then connect to
with the GCP SQL credentials for staging and production.

## Neo4j Proxy

If you need to access either the staging or production neo4j on your local
machine, you can connect to it via GKE Service Port forwarding. You can
connect to `staging` and `production` with these respective commands:

```
yarn run neo4j-proxy-staging
yarn run neo4j-proxy-production
```

With either command (both cannot be ran at the same time), you'll have a
local Neo4j instance at `127.0.0.1:7474`, which you can then connect to with
the GCP SQL credentials for staging and production.

### Getting KubeConfig on your machine

```bash
gcloud container clusters get-credentials neon-law-production

# or for staging
gcloud container clusters get-credentials neon-law-staging
```

## Legal

Copyright 2021 Neon Law. Licensed under the [Neon License](LICENSE.md). The Neon
License is the same as the Apache License Version 2 with the additional
disclaimer that nothing provided herein is legal advice.

Please contact us if you have any questions at support@neonlaw.com.
