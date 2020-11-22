#!/bin/bash
set -e

# Bulid the app with development/testing environment variables
export GATSBY_ACTIVE_ENV="development"
yarn workspace @neonlaw/$PACKAGE_NAME build

yarn workspace @neonlaw/$PACKAGE_NAME start
