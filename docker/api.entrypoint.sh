#!/bin/bash
set -e

if [ -d "/credentials" ]; then
  export GOOGLE_APPLICATION_CREDENTIALS="/credentials/credentials.json"
fi

yarn workspace @neonlaw/api migrate

exec "$@"
