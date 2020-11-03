--! Previous: sha1:d940bf8386c2f8db2629188e8664191f97af06b2
--! Hash: sha1:3a955a308f2e9beb5698aa39a186077880c229c0

-- Enter migration here

ALTER TABLE response DROP CONSTRAINT IF EXISTS response_upload_id_fkey;
ALTER TABLE response DROP COLUMN IF EXISTS upload_id;

ALTER TABLE upload ADD COLUMN IF NOT EXISTS response_id UUID NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'upload_response_id_fkey') THEN
ALTER TABLE upload ADD CONSTRAINT upload_response_id_fkey
FOREIGN KEY (response_id) REFERENCES response(id);

END IF;

END;
$$;

ALTER TABLE private_document ADD COLUMN IF NOT EXISTS matter_id UUID NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'private_document_matter_id_fkey') THEN
ALTER TABLE private_document ADD CONSTRAINT private_document_matter_id_fkey
FOREIGN KEY (matter_id) REFERENCES matter(id);

END IF;

END;
$$;

CREATE TABLE IF NOT EXISTS writing(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));


ALTER TABLE writing ADD COLUMN IF NOT EXISTS document_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'writing_document_id_fkey') THEN
ALTER TABLE writing ADD CONSTRAINT writing_document_id_fkey
FOREIGN KEY (document_id) REFERENCES document(id);

END IF;

END;
$$;

ALTER TABLE writing ADD COLUMN IF NOT EXISTS person_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'writing_person_id_fkey') THEN
ALTER TABLE writing ADD CONSTRAINT writing_person_id_fkey
FOREIGN KEY (person_id) REFERENCES person(id);

END IF;

END;
$$;

ALTER TABLE writing ADD COLUMN IF NOT EXISTS mdx varchar NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS unique_filename_per_documentable ON document (documentable_table_name, filename);
