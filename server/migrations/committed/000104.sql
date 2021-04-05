--! Previous: sha1:d996887bceb95cb626f0c1166bd3fe92926dfb18
--! Hash: sha1:071b0d22a9101504b9044e8af2b3efb07bacb81e

-- Enter migration here


ALTER TABLE document DROP COLUMN IF EXISTS gcp_url;
DROP DOMAIN IF EXISTS gcp_url;

CREATE DOMAIN gcp_url AS text
CHECK (VALUE ~ 'https://neon-law-(staging|production)-private-assets.storage.googleapis.com/(matters|responses)/.*');

COMMENT ON DOMAIN gcp_url IS 'the GCP Storage URL of the private file.';

ALTER TABLE document ADD COLUMN IF NOT EXISTS gcp_url gcp_url;
