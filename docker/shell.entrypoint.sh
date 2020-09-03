#!/bin/bash
set -e

yarn install
poetry install

exec "$@"
