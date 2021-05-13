--! Previous: sha1:49f7b7387d63e381b4a308cca433255cfa0f6ee7
--! Hash: sha1:9fa0da51f9e6537efdb18149a42f4a1438455418

-- Enter migration here

ALTER TABLE document_templates ADD COLUMN IF NOT EXISTS abbreviation varchar;

CREATE UNIQUE INDEX IF NOT EXISTS docmuent_templates_abbreviation ON document_templates (abbreviation);

ALTER TABLE document_templates ADD COLUMN IF NOT EXISTS jurisdiction varchar;
