--! Previous: sha1:a58cf84907c1851854963211d5a7f5a3d190b18b
--! Hash: sha1:5135921435cdc407a692b9c950f0020cf48d6a08

-- Enter migration here

CREATE INDEX IF NOT EXISTS document_document_templates ON document(document_template_id);
