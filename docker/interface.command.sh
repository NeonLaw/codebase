#!/bin/bash
set -e

# wait for API to start first
sleep 10

cp -vr ./packages/shared-ui/fonts ./packages/$PACKAGE_NAME/static

yarn

yarn workspace @neonlaw/$PACKAGE_NAME start
