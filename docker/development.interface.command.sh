#!/bin/bash
set -e

# Wait until the API is launched before building and serving the web app
while ! nc -z api 3000; do sleep 1; done;

yarn workspace @neonlaw/web dev -p 8000
