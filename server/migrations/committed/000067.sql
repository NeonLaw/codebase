--! Previous: sha1:813b59a1042a146df68f0f92d48adaae0c5d7855
--! Hash: sha1:affa20f9d3cc57fbf6335193f52e3c7a91e932c7

-- Enter migration here

ALTER TABLE document DROP COLUMN IF EXISTS document_template_id;

ALTER TABLE document_template RENAME TO matter_document_template;

ALTER TABLE matter_document ADD COLUMN IF NOT EXISTS matter_document_template_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'matter_document_matter_document_template_id_fkey') THEN
ALTER TABLE matter_document ADD CONSTRAINT matter_document_matter_document_template_id_fkey
FOREIGN KEY (matter_document_template_id) REFERENCES matter_document_template(id);

END IF;

END;
$$;
