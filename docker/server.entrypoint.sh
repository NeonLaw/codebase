#!/bin/bash
set -e

echo "Booting the Server"

yarn install --silent --ignore-optional --frozen-lockfile

if [ -d "/credentials" ]; then
  export GOOGLE_APPLICATION_CREDENTIALS="/credentials/credentials.json"
fi

if [ "$PROCESS_NAME" = "api" ]; then
  yarn run graphile-worker --schema-only
  yarn workspace @neonlaw/server migrate
fi

exec "$@"
