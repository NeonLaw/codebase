#!/bin/bash
set -e

export CYPRESS_SITE_URL="http://$PACKAGE_NAME:8000"

while ! nc -z api 3000; do sleep 1; done;

yarn workspace @neonlaw/$PACKAGE_NAME dev
