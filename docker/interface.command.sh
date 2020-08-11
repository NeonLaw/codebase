#!/bin/bash
set -e

while ! nc -z api 3000; do sleep 1; done;

cp -vr ./packages/shared-ui/fonts ./packages/$PACKAGE_NAME/static

yarn

yarn workspace @neonlaw/$PACKAGE_NAME start
