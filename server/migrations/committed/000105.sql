--! Previous: sha1:071b0d22a9101504b9044e8af2b3efb07bacb81e
--! Hash: sha1:c38e2dbc6a292782014315339114a21468c8cc95

-- Enter migration here

DROP INDEX IF EXISTS unique_filename_per_documentable;

CREATE UNIQUE INDEX IF NOT EXISTS unique_gcp_url ON document (gcp_url);

ALTER TABLE document ALTER COLUMN gcp_url SET NOT NULL;
ALTER TABLE document ALTER COLUMN document_template_id SET NOT NULL;
