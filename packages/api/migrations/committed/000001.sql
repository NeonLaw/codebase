--! Previous: -
--! Hash: sha1:2e6f8fdd8d52f5da4d447a30a6e9d246f60563a7

-- Enter migration here
-- Enable the UUID extension for primary keys

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable the citext, or case insensitive text field.

CREATE EXTENSION IF NOT EXISTS "citext";
