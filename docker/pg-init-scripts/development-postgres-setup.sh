#!/bin/bash

set -e
set -u

echo "creating the neon_law_admin role if it does not exist"

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  DO \$\$
  BEGIN
    CREATE ROLE neon_law_admin WITH NOLOGIN;
    EXCEPTION WHEN DUPLICATE_OBJECT THEN
    RAISE NOTICE 'not creating role neon_law_admin -- it already exists';
  END
  \$\$;
EOSQL

function create_user_and_database() {
	local database=$1
	echo "  Creating database '$database'"
	psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
			CREATE DATABASE $database;
			GRANT ALL PRIVILEGES ON DATABASE $database TO postgres;
			GRANT ALL PRIVILEGES ON DATABASE $database TO neon_law_admin;
EOSQL
}

for db in $(echo 'neon_law,shadow_neon_law' | tr ',' ' '); do
  create_user_and_database $db
done
echo "Multiple databases created"
