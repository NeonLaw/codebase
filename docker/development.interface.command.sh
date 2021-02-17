#!/bin/bash
set -e

# Wait until the API is launched before building and serving the web app
while ! nc -z api 3000; do sleep 1; done;

cd ./web
yarn dev -p 8000
