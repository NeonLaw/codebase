# Neon Law Interface

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
yarn dev
```

Then navigate to `http://127.0.0.1:8000` to see the website ran on your machine.

> You must be connected to the Internet to work on this application.

## Third Party SaaS Services

This application uses Zendesk Chat to host chat with visitors and Google
Analytics for data collection.

## Staging Environment

The staging environment has a layer of HTTP Basic authentication, to get
those credentials, please contact us at support@neonlaw.com.

To change the username and password, you will need to update the
`staging_htpasswd` file. You can do so via:

```
sudo htpasswd -c ./staging_htpasswd neon_law
```

Then enter in the password when prompted.

## Legal

Copyright 2020 Neon Law. Licensed under the [Apache License Version
2.0](https://www.apache.org/licenses/LICENSE-2.0.txt).
