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
|[neon_nlp](./neon_nlp)|![Crates.io](https://img.shields.io/crates/v/neon_nlp)|n/a|n/a|
|[git_flow](./git_flow)|![Crates.io](https://img.shields.io/crates/v/git_flow)|n/a|n/a|
|[neon_postgres](./postgres)|![RubyGems.Org](https://img.shields.io/gem/v/neon_postgres)|n/a|n/a|
|[neon_email](./email)|![RubyGems.Org](https://img.shields.io/gem/v/neon_email)|n/a|n/a|
|[neon_diagrams](./diagrams)|![RubyGems.Org](https://img.shields.io/pypi/v/neon_diagrams)|n/a|n/a|

This repo also contains an `infrastructure` folder for managing cloud and
SaaS resources with Terraform and a `shell` folder containing our base docker
image, which contains all the libraries necessary to work on any of the above
packages.

## Developer Setup

### Git Flow

Our opinionated [git flow](./git_flow) is an essential part of working with this
repo. A series of continuous integration and deployment scripts will run
based on how you name your branches and your subsequent pull request to the
`main` branch. Please refer to the package or the `git_flow` CLI available from
crates.io for more information.

### Configuration

We use [Doppler](https://www.doppler.com/) for storing and sharing configuration
secrets like API keys. If you wish to work on the application, please email us
at support@neonlaw.com to request test credentials.

### Web Development

For developing the website you can do so locally and speak to our staging
GraphQL server. To spin up a Next.JS server, enter the following commands.

```bash
yarn
doppler setup # staging
doppler run -- yarn workspace @neonlaw/web dev
```

### Server Development

We recommend developing with a containerized setup that best mimic our staging
and production process. If you have docker and docker-compose installed on
your machine, you can follow these two steps to start developing.

1. Start Docker Compose

```bash
doppler setup # development
doppler run -- docker compose up
```

This starts the following containers:

- A shell container (see step 2 for more)
- Database Servers for:
  - Postgres (localhost:5432)
  - Neo4j (localhost:7687)
  - Elasticsearch (localhost:9200)
  - Kafka Broker (localhost:9092)
  - Kafka Schema Registry (localhost:8081)
  - Confluent Connect (localhost:8083)
  - Confluent Control Center (localhost:9021)
  - Kafka SQLDB Server (localhost:8088)
  - Kafka SQLDB CLI
  - Kafka SQLDB Datagen
  - Kafka Rest Proxy (localhost:8082)
  - Zookeeper (localhost:2181)
  - Superset (localhost:8080)
    - Set up steps: https://hub.docker.com/r/apache/superset
    - Username: admin
    - Password: admin
- Web Servers for:
  - our website (http://127.0.0.1:8000)
  - our API (http://127.0.0.1:3000/graphiql)
- Background Servers for:
  - Jobs on Graphile Migrate
  - Email (TBD)

2. `exec /bin/bash` in the shell container.

You are encouraged to do work from the shell container, which contains all of
the third party dependencies and libraries to run all of the code defined
herein. You can access a shell with:

```
docker exec -it shell /bin/bash
```

3. VSCode settings (optional)

If you don't already have a favorite editor, we recommend [VSCode by
Microsoft](https://code.visualstudio.com/). Using VSCode with Docker Compose
as outlined in the previous step, you can edit files directly in the `shell`
container. By doing so, you don't need to install _anything_ on your host
machine except for Docker. Node, Python, Postgres, and anything else we
may add in the future will all run within Docker containers managed by Docker
Compose.

To edit within a container, [follow this
tutorial](https://code.visualstudio.com/docs/remote/containers), which
assumes that you have the `Remote - Containers` extension installed. Then
after starting `docker-compose up`, you can attach to the `shell` container,
which already has node, psql, and python, with our third-party libraries, and
required environment variables, ready for you.

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

### Neo4j Proxy

If you need to access either the staging or production neo4j on your local
machine, you can connect to it via GKE Service Port forwarding. You can
connect to `staging` and `production` with these respective commands:

```bash
doppler setup # staging
doppler run -- yarn run neo4j-proxy-staging
doppler setup # production
doppler run -- yarn run neo4j-proxy-production
```

With either command (both cannot be ran at the same time), you'll have a
local Neo4j instance at `127.0.0.1:7474` if you have the proper GCP SQL
credentials for staging and production. To keep the connection alive, run
`yarn neo4j-poll` to ping the neo4j server every 10 seconds.

### Superset Proxy

If you need to access either the staging or production Superset on your local
machine, you can connect to it via GKE Service Port forwarding, similar to the
Neo4j proxy above. You can connect to `staging` and `production` with these
respective commands:

```bash
doppler setup # staging
doppler run -- yarn run superset-proxy-staging
doppler setup # production
doppler run -- yarn run superset-proxy-production
```

With either command (both cannot be ran at the same time), you'll have a
local Superset instance at `127.0.0.1:8088` if you have the proper GCP SQL
credentials for staging and production. To keep the connection alive, run
`yarn superset-poll` to ping the neo4j server every 10 seconds.

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
