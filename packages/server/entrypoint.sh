#!/bin/bash

if [ -d "/secrets" ]; then
  # Load secrets from Google K8 Secrets and wait for Google SQL Proxy to start
  export AUTH0_CLIENT_ID=$(cat /secrets/AUTH0_CLIENT_ID) && \
  export AUTH0_CLIENT_SECRET=$(cat /secrets/AUTH0_CLIENT_SECRET) &&\
  export AUTH0_TENANT=$(cat /secrets/AUTH0_TENANT)

  # Intentionally sleep
  sleep 2
else
  # Wait for postgres to start
  while ! nc -z postgres 5432; do sleep 1; done;
fi

yarn
yarn migrate

exec "$@"
