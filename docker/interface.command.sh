#!/bin/bash
set -e

# Wait until the API is launched before building and serving the web app
while ! nc -z api 3000; do sleep 1; done;

# Bulid the app with development/testing environment variables
export GATSBY_ACTIVE_ENV="development"
yarn workspace @neonlaw/$PACKAGE_NAME build

yarn workspace @neonlaw/$PACKAGE_NAME start
