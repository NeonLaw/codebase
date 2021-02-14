--! Previous: sha1:6bf34607a219aeb064b2d95463c745cb969a0de8
--! Hash: sha1:2fb460e82cad389f69cb11e166516d341b088c13

-- Enter migration here

ALTER TABLE person ALTER COLUMN sub DROP NOT NULL;

CREATE TABLE IF NOT EXISTS document(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                  PRIMARY KEY (id));

ALTER TABLE document ADD COLUMN IF NOT EXISTS filename varchar(255) NOT NULL;

ALTER TABLE document ADD COLUMN IF NOT EXISTS matter_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'document_matter_id_fkey') THEN
ALTER TABLE document ADD CONSTRAINT document_matter_id_fkey
FOREIGN KEY (matter_id) REFERENCES matter(id);

END IF;

END;
$$;

CREATE UNIQUE INDEX IF NOT EXISTS unique_matter_document_filename ON document(matter_id, filename);

ALTER TABLE document ADD COLUMN IF NOT EXISTS document_type varchar(128) NOT NULL;

ALTER TABLE document DROP CONSTRAINT IF EXISTS document_type_check;
ALTER TABLE document ADD CONSTRAINT document_type_check CHECK (
  document_type IN (
    'court-filing',
    'retainer',
    'email',
    'letter'
  )
);
