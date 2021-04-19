--! Previous: sha1:f54cf811d8f199930c03990dbb3a3f7b6f20ba39
--! Hash: sha1:f6b58413b8ffa5019e11fc2243cca1036f4fbca9

-- Enter migration here

GRANT ALL ON matter_contact TO admin;

ALTER TABLE address ADD COLUMN IF NOT EXISTS active BOOLEAN NOT NULL DEFAULT false;
