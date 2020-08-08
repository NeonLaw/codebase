# Neon Law Codebase

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](CODE_OF_CONDUCT.md)
[![Maintainability](https://api.codeclimate.com/v1/badges/a9de7883f94a89b722a5/maintainability)](https://codeclimate.com/github/NeonLaw/interface/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a9de7883f94a89b722a5/test_coverage)](https://codeclimate.com/github/NeonLaw/interface/test_coverage)
[![Continuous Integration](https://github.com/NeonLaw/interface/workflows/continuous_integration/badge.svg)](https://github.com/NeonLaw/interface/actions?query=workflow%3Acontinuous_integration)
[![Docker Hub](https://github.com/neonlaw/interface/workflows/docker_hub/badge.svg)](https://github.com/NeonLaw/interface/actions?query=workflow%3Adocker_hub)
[![Staging](https://github.com/neonlaw/interface/workflows/staging/badge.svg)](https://github.com/NeonLaw/interface/actions?query=workflow%3Astaging)
[![Production](https://github.com/neonlaw/interface/workflows/production/badge.svg)](https://github.com/NeonLaw/interface/actions?query=workflow%3Aproduction)

This is a monorepo containing three, top-level packages:

* A Yarn Workspace, declared at `package.json` and with packages at
  `./packages`, which contains the bulk of our code.
* A collection of Terraform modules located in the `./infrastructure` folder,
  for building out our Cloud Computing.
* A Python module, declared at `pyproject.toml` and with code at `./neon_law`
  and tests at `./tests`, which contains our NLP work and other tasks we feel
  are well-suited for Python and its ecosystem.

And build files, including a folder of `Dockerfile`s and `entrypoint` shell
scripts, located at `./docker`, and `docker-compose` files for local
development and CI located at the project root.

## Running Locally

We recommend developing with a containerized setup that best mimic our staging
and production process. If you have docker and docker-compose installed on
your machine, you can follow these two steps to start developing.

1. Ensure that you have the proper environment variables and GCP Credential.

You should have these environment variables on your machine:

* `AUTH0_CLIENT_ID`
* `AUTH0_CLIENT_SECRET`
* `AUTH0_TENANT`
* `CYPRESS_AUTH_URL`
* `CYPRESS_AUDIENCE_URL`
* `CYPRESS_AUTH_CLIENT_ID`
* `CYPRESS_AUTH_CLIENT_SECRET`

You will need to have values for these environment variables sourced in the same
bash shell as when you run the next step.

2. Start Docker Compose

```bash
docker-compose up
```

This starts the following containers:

* A shell container that you can use via `docker exec -it shell /bin/bash`
* Web Servers for:
  * NeonLaw.com (http://127.0.0.1:8000)
  * LawJobResources.com (http://127.0.0.1:5000)
  * DeleteYourData.com (http://127.0.0.1:6000)
  * JusticeForRickieSlaughter.com (http://127.0.0.1:7000)
  * The NeonLaw API (http://127.0.0.1:3000)
* A Language Tool server for grammar correction in your Editor. We recommend
  VSCode and the Language Tool extension for VSCode.

You can start a subset of services with Docker Compose if you do not need to
run all of the applications. For instance, if you just wanted to start the
API server and the shell container it depends on, you could run:

```
docker-compose up api
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



## Authentication

This application uses Auth0 with two tenants, one for staging/development, and
one for our production account. The staging account has the following
accounts, please contact us at support@neonlaw.com should you need these
passwords to develop the authenticated portions of our application.

* portal@neonlaw.com, a user with portal permissions
* lawyer@neonlaw.com, a user with lawyer permissions
* admin@neonlaw.com, a user with admin permissions

Read our blog post about
[Authorization](https://www.neonlaw.com/blog/authorization) to learn more about
these roles.

## Third-Party SaaS Services

To help us write into this repository and run our business, we use these
software:

* Auth0
* Casetext
* Code Climate
* Fathom Analytics
* G Suite
* GitHub
* Google Cloud Platform
* Postgraphile
* SendGrid
* Terraform Cloud
* Transloadit
* Xero
* Zendesk Suite

## Continuous Integration and Deployment

Our app uses a series of GitHub Actions Workflows to run a suite of automated
tests and linters. You can find these tests
[here](https://github.com/neonlaw/codebase).

On pushes to the `development` branch, our staging environment is updated.

On pushes to the `production` branch, our production environment is updated.

## Legal

Copyright 2020 Neon Law. Licensed under the [Polyform Noncommercial License
1.0.0](LICENSE.md). Please contact us if you have any questions at
support@neonlaw.com.
