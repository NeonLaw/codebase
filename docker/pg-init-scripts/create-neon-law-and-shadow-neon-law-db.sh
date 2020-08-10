#!/bin/bash

set -e
set -u

function create_user_and_database() {
	local database=$1
	echo "  Creating database '$database'"
	psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
	    CREATE DATABASE $database;
	    GRANT ALL PRIVILEGES ON DATABASE $database TO postgres;
EOSQL
}

for db in $(echo 'neon_law,shadow_neon_law' | tr ',' ' '); do
  create_user_and_database $db
done
echo "Multiple databases created"
