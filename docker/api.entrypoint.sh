#!/bin/bash
set -e

yarn
yarn workspace @neonlaw/api migrate

exec "$@"
