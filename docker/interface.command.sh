#!/bin/bash
set -e

yarn install \
  --silent \
  --ignore-optional \
  --prefer-offline \
  --cache-folder ./node_modules

yarn workspace @neonlaw/$PACKAGE_NAME build

while ! nc -z api 3000; do sleep 1; done;

yarn workspace @neonlaw/$PACKAGE_NAME start
