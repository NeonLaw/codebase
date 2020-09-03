--! Previous: sha1:2fb460e82cad389f69cb11e166516d341b088c13
--! Hash: sha1:e9f3fb3ce174f33eaa8e5181c6ef43c5d6eb418d

-- Enter migration here

ALTER TABLE document DROP COLUMN IF EXISTS document_type;

CREATE TABLE IF NOT EXISTS document_code(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

SELECT create_primary_key_id_if_not_exists('document_code');

ALTER TABLE document ADD COLUMN IF NOT EXISTS document_code_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'document_document_code_id_fkey') THEN
ALTER TABLE document ADD CONSTRAINT document_document_code_id_fkey
FOREIGN KEY (document_code_id) REFERENCES document_code(id);

END IF;

END;
$$;

ALTER TABLE document_code ADD COLUMN IF NOT EXISTS name varchar NOT NULL;
ALTER TABLE document_code ADD COLUMN IF NOT EXISTS description varchar NOT NULL;
