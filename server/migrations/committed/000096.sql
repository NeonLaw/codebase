--! Previous: sha1:c6223fc3376405cab844e097fe8a5726f160157d
--! Hash: sha1:08e6d11a17e309839272f9930a8b9d9d4cff92d2

-- Enter migration here


ALTER TABLE matter_document DROP COLUMN IF EXISTS matter_document_template_id;


ALTER TABLE document_template ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;

ALTER TABLE document_template ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;


DROP TRIGGER IF EXISTS set_updated_at_on_document_template ON public.document_template;

-- This trigger updates the updated_at column when a question is saved.

CREATE TRIGGER set_updated_at_on_document_template
BEFORE
UPDATE ON document_template
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();

ALTER TABLE matter ADD COLUMN IF NOT EXISTS description JSON NOT NULL DEFAULT '{}';
