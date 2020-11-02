--! Previous: sha1:a3bc47ad940542429fe5f3cdb52ec8324adee2d5
--! Hash: sha1:65a692e9f94949e1f9cf2293674e781b1ab0cd72

-- Enter migration here

ALTER TABLE document DROP COLUMN IF EXISTS document_code_id;

ALTER TABLE document ADD COLUMN IF NOT EXISTS document_template_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'document_document_template_id_fkey') THEN
ALTER TABLE document ADD CONSTRAINT document_document_template_id_fkey
FOREIGN KEY (document_template_id) REFERENCES document_template(id);

END IF;

END;
$$;
