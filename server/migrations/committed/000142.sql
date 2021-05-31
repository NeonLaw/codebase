--! Previous: sha1:f9c4c31f5edb564a21b718410f38ffe0f7729688
--! Hash: sha1:61621469c0f9aa7ed76910f197257ab96f84ea80

-- Enter migration here

ALTER TABLE unprocessed_documents ADD COLUMN IF NOT EXISTS gcp_url gcp_url NOT NULL;

ALTER TABLE unprocessed_documents DROP COLUMN IF EXISTS filename;

CREATE UNIQUE INDEX IF NOT EXISTS unprocessed_documents_gcp_urls ON unprocessed_documents (gcp_url);
