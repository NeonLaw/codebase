--! Previous: sha1:2e6f8fdd8d52f5da4d447a30a6e9d246f60563a7
--! Hash: sha1:b4637d729488ecf9d7a758adaad34fc28b4cd161

-- Enter migration here
-- Create a Postgres Role if it does not exist

CREATE OR REPLACE FUNCTION create_role_if_not_exists(role_name text) RETURNS void AS $$
BEGIN
  EXECUTE FORMAT('CREATE ROLE "%s" WITH NOLOGIN', $1);
  EXCEPTION WHEN DUPLICATE_OBJECT THEN
  RAISE NOTICE 'not creating role % -- it already exists', $1;
END;
$$ LANGUAGE plpgsql;

-- Create the anonymous role, used for public users

SELECT create_role_if_not_exists('anonymous');

-- Create the portal role, used for logged-in users

SELECT create_role_if_not_exists('portal');

-- Create the lawyer role, used for lawyers in our network

SELECT create_role_if_not_exists('lawyer');

-- Create the admin role, used for Neon Law staff

SELECT create_role_if_not_exists('admin');

-- Give our newly created users access to the schema
GRANT USAGE ON SCHEMA public TO anonymous;

GRANT USAGE ON SCHEMA public TO portal;

GRANT USAGE ON SCHEMA public TO lawyer;

GRANT USAGE ON SCHEMA public TO admin;
