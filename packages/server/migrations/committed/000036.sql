--! Previous: sha1:221ad9debf4a33bc256c53a7228884fd05ae6021
--! Hash: sha1:afcb5b8d2845a237c20fd4db57e6d3791f6a8e6d

-- Enter migration here

ALTER TABLE document DROP COLUMN IF EXISTS matter_id;

ALTER TABLE document_code RENAME TO document_template;

ALTER TABLE document_template RENAME description TO javascript_module;

ALTER TABLE letter DROP CONSTRAINT IF EXISTS letter_letter_template_id_fkey;
DROP TABLE letter_template;

ALTER TABLE letter ADD COLUMN IF NOT EXISTS document_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'letter_document_id_fkey') THEN
ALTER TABLE letter ADD CONSTRAINT letter_document_id_fkey
FOREIGN KEY (document_id) REFERENCES document(id);

END IF;

END;
$$;

ALTER TABLE document ADD COLUMN IF NOT EXISTS documentable_table_name VARCHAR NOT NULL;

ALTER TABLE document DROP CONSTRAINT IF EXISTS document_documentable_table_name_check;
ALTER TABLE document ADD CONSTRAINT document_documentable_table_name_check CHECK (
  documentable_table_name IN (
    'private_document',
    'public_document',
    'upload'
  )
);

ALTER TABLE document ALTER COLUMN documentable_table_name SET NOT NULL;

ALTER TABLE document ADD COLUMN IF NOT EXISTS documentable_table_id UUID NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS document_documentable_association ON document (documentable_table_name, documentable_table_id);
