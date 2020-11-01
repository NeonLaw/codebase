#!/bin/bash
set -e

if [ -d "/credentials" ]; then
  export GOOGLE_APPLICATION_CREDENTIALS="/credentials/credentials.json"
fi

yarn install --cache-folder ./node_modules/ --prefer-offline
yarn workspace @neonlaw/api migrate

exec "$@"
