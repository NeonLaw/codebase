#!/bin/bash
set -e

if [ -d "/secrets" ]; then
  # Load secrets from Google K8 Secrets and wait for Google SQL Proxy to start
  export AUTH0_CLIENT_ID=$(cat /secrets/AUTH0_CLIENT_ID) && \
  export AUTH0_CLIENT_SECRET=$(cat /secrets/AUTH0_CLIENT_SECRET) &&\
  export AUTH0_TENANT=$(cat /secrets/AUTH0_TENANT)

  export GOOGLE_APPLICATION_CREDENTIALS="/credentials/credentials.json"

fi

# Intentionally sleep for SQL Proxy and/or Postgres to start
sleep 2

yarn
yarn workspace @neonlaw/api migrate

exec "$@"
