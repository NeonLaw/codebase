--! Previous: sha1:8506c2573183be8e129381811bbef0969980b9b5
--! Hash: sha1:f33c6d0983c5733033d435f826b79219e37f255c

-- Enter migration here

ALTER TABLE matter_document DROP CONSTRAINT IF EXISTS matter_document_matter_document_template_id_fkey;
DROP TABLE IF EXISTS matter_document_template;

CREATE TABLE IF NOT EXISTS document_template(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

ALTER TABLE document ADD COLUMN IF NOT EXISTS document_template_id uuid;

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

ALTER TABLE document_template ADD COLUMN IF NOT EXISTS name text NOT NULL;
