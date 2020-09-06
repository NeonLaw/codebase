#!/bin/bash
set -e

# Load secrets from Google K8 Secrets and wait for Google SQL Proxy to start
if [ -d "/secrets" ]; then
  export AUTH0_CLIENT_ID=$(cat /secrets/AUTH0_CLIENT_ID) && \
  export AUTH0_CLIENT_SECRET=$(cat /secrets/AUTH0_CLIENT_SECRET) &&\
  export AUTH0_TENANT=$(cat /secrets/AUTH0_TENANT)

  export GOOGLE_APPLICATION_CREDENTIALS="/credentials/credentials.json"
fi

yarn
yarn workspace @neonlaw/api migrate

exec "$@"
