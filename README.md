# Neon Law Codebase [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Legaltech%20in%20the%20open.%20Check%20out%20%40NeonLaw%27s%20codebase%20repository%20for%20software%20and%20legal%20writing.&url=https://github.com/neonlaw/codebase)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![Maintainability](https://api.codeclimate.com/v1/badges/a9de7883f94a89b722a5/maintainability)](https://codeclimate.com/github/NeonLaw/interface/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a9de7883f94a89b722a5/test_coverage)](https://codeclimate.com/github/NeonLaw/interface/test_coverage)
[![Continuous Integration](https://github.com/NeonLaw/interface/workflows/continuous_integration/badge.svg)](https://github.com/NeonLaw/interface/actions?query=workflow%3Acontinuous_integration)
[![Staging](https://github.com/neonlaw/interface/workflows/staging/badge.svg)](https://github.com/NeonLaw/interface/actions?query=workflow%3Astaging)
[![Production](https://github.com/neonlaw/interface/workflows/production/badge.svg)](https://github.com/NeonLaw/interface/actions?query=workflow%3Aproduction)

This is a monorepo containing these folders:

- A Yarn Workspace, declared at `package.json` and with packages at
  `./packages`, which contains the bulk of our code.
- A collection of Terraform modules located in the `./infrastructure` folder,
  for building out our Cloud Computing.
- A collection of `Dockerfile`s and entrypoint scripts modules located in the
  `./docker` folder, for building out our containers.

## Running Locally

We recommend developing with a containerized setup that best mimic our staging
and production process. If you have docker and docker-compose installed on
your machine, you can follow these two steps to start developing.

1. Ensure that you have the proper environment variables and GCP Credential.

You should have some, if not all of these environment variables on your machine:

- `AUTH0_CLIENT_ID`
- `AUTH0_CLIENT_SECRET`
- `AUTH0_TENANT`
- `CYPRESS_ADMIN_USER_PASSWORD`
- `CYPRESS_AUTH0_CLIENT_ID`
- `CYPRESS_AUTH0_CLIENT_SECRET`
- `CYPRESS_AUTH_URL`
- `CYPRESS_LAWYER_USER_PASSWORD`
- `CYPRESS_PORTAL_USER_PASSWORD`
- `TRANSLOADIT_KEY`
- `TRANSLOADIT_SECRET`
- `TRANSLOADIT_PDF_TEMPLATE_ID`
- `TRANSLOADIT_IMAGE_TEMPLATE_ID`
- `GOOGLE_APPLICATION_CREDENTIALS`

You will need to have values for these environment variables sourced in the same
bash shell as when you run the next step. Additionally, you should have the
file `credentials.json` at the root of this repo if you're doing work that
talks to our staging GCP environment. This file is excluded from `.git` in
the `.gitignore` file so you'll need to get this from support@neonlaw.com.

2. Start Docker Compose

```bash
docker-compose up
```

This starts the following containers:

- A shell container that you can use via `docker exec -it shell /bin/bash`
- Web Servers for:
  - NeonLaw.com (http://127.0.0.1:8000)
  - LawJobResources.com (http://127.0.0.1:5000)
  - DeleteYourData.com (http://127.0.0.1:6000)
  - JusticeForRickieSlaughter.com (http://127.0.0.1:7000)
  - The NeonLaw API (http://127.0.0.1:3000)

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
docker-compose up postgres interface
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

## Authentication

This application uses Auth0 with two tenants, one for staging/development, and
one for our production account. The staging account has the following
accounts, please contact us at support@neonlaw.com should you need these
passwords to develop the authenticated portions of our application.

- portal@neonlaw.com, a user with portal permissions
- lawyer@neonlaw.com, a user with lawyer permissions
- admin@neonlaw.com, a user with admin permissions

Read our blog post about
[Authorization](https://www.neonlaw.com/blog/authorization) to learn more about
these roles.

## Third-Party SaaS Services

To help us write into this repository and run our business, we use these
software:

- Auth0
- Casetext
- Code Climate
- Fathom Analytics
- Google Workplace
- GitHub
- Google Cloud Platform
- Grammarly
- LanguageTool
- Lexis Nexis
- LogRocket
- Mercury Bank
- PGRita
- Postgraphile
- SendGrid
- Slack
- Terraform Cloud
- Transloadit
- Xero
- Zendesk Suite

## Continuous Integration and Deployment

Our app uses a series of GitHub Actions Workflows to run a suite of automated
tests. You can find these tests
[here](https://github.com/neonlaw/codebase/actions).

On pushes to the `development` branch and a successful test run, our [staging
environment](https://www.neonlaw.net) is updated.

On Monday through Thursday at 4:00 am PST, the [production
environment](https://www.neonlaw.com) is updated with the latest commit from
`development`.

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
yarn run sql-proxy-staging
yarn run sql-proxy-production
```

With either command (both cannot be ran at the same time), you'll have a
PostgreSQL database running at `127.0.0.1:5432`, which you can then connect to
with the GCP SQL credentials for staging and production.

## Legal

Copyright 2020 Neon Law. Licensed under the [Polyform Noncommercial License
1.0.0](LICENSE.md). Please contact us if you have any questions at
support@neonlaw.com.
