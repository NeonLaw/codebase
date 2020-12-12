#!/bin/bash
set -e

echo "Booting the API"

yarn install \
  --silent \
  --ignore-optional

if [ -d "/credentials" ]; then
  export GOOGLE_APPLICATION_CREDENTIALS="/credentials/credentials.json"
fi

yarn workspace @neonlaw/server migrate

exec "$@"
