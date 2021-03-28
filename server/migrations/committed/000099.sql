--! Previous: sha1:a358907bc220de220122016ec4105840bb0d6621
--! Hash: sha1:bd4735e7e5925a0893d000663d86dbeef279dfa2

-- Enter migration here

ALTER TABLE matter ADD COLUMN IF NOT EXISTS active BOOLEAN NOT NULL DEFAULT true;

CREATE INDEX IF NOT EXISTS matter_document_matters ON matter_document(matter_id);
