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

if [ "$NODE_ENV" = "development" ]; then
  DATABASE_URL=postgres://postgres:password@postgres:5432/staging yarn workspace @neonlaw/server migrate
  DATABASE_URL=postgres://postgres:password@postgres:5432/staging yarn run graphile-worker --schema-only

  DATABASE_URL=postgres://postgres:password@postgres:5432/production yarn workspace @neonlaw/server migrate
  DATABASE_URL=postgres://postgres:password@postgres:5432/production yarn run graphile-worker --schema-only
fi

exec "$@"
