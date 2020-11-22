#!/bin/bash
set -e

export GATSBY_ACTIVE_ENV="development"

yarn workspace @neonlaw/$PACKAGE_NAME build

while ! nc -z api 3000; do sleep 1; done;

yarn workspace @neonlaw/$PACKAGE_NAME start
