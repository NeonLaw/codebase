--! Previous: sha1:949cf8168d23a02420a0a4daf6411631eba41a1e
--! Hash: sha1:4f7e0984f12408f072d5eb767b2e3cc5c4f99c47

-- Enter migration here

ALTER TABLE matters DROP COLUMN IF EXISTS slug;
ALTER TABLE questions DROP COLUMN IF EXISTS slug;

DROP DOMAIN IF EXISTS slug;
CREATE DOMAIN slug AS text

CHECK (VALUE ~ '^[a-zA-Z]+[a-zA-Z\-]*[a-zA-Z]$');

ALTER TABLE matters ADD COLUMN IF NOT EXISTS slug slug;
ALTER TABLE questions ADD COLUMN IF NOT EXISTS slug slug;
