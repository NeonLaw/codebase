--! Previous: sha1:afcb5b8d2845a237c20fd4db57e6d3791f6a8e6d
--! Hash: sha1:ac2533df46189aac4fac8f6386cb958829ba3187

-- Enter migration here

CREATE TABLE IF NOT EXISTS public_document(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS private_document(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS upload(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));


ALTER TABLE public_document ADD COLUMN IF NOT EXISTS document_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'public_document_document_id_fkey') THEN
ALTER TABLE public_document ADD CONSTRAINT public_document_document_id_fkey
FOREIGN KEY (document_id) REFERENCES document(id);

END IF;

END;
$$;

ALTER TABLE private_document ADD COLUMN IF NOT EXISTS document_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'private_document_document_id_fkey') THEN
ALTER TABLE private_document ADD CONSTRAINT private_document_document_id_fkey
FOREIGN KEY (document_id) REFERENCES document(id);

END IF;

END;
$$;

ALTER TABLE upload ADD COLUMN IF NOT EXISTS document_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'upload_document_id_fkey') THEN
ALTER TABLE upload ADD CONSTRAINT upload_document_id_fkey
FOREIGN KEY (document_id) REFERENCES document(id);

END IF;

END;
$$;

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

ALTER TABLE private_document ADD COLUMN IF NOT EXISTS person_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'private_document_person_id_fkey') THEN
ALTER TABLE private_document ADD CONSTRAINT private_document_person_id_fkey
FOREIGN KEY (person_id) REFERENCES person(id);

END IF;

END;
$$;

ALTER TABLE upload ADD COLUMN IF NOT EXISTS person_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'upload_person_id_fkey') THEN
ALTER TABLE upload ADD CONSTRAINT upload_person_id_fkey
FOREIGN KEY (person_id) REFERENCES person(id);

END IF;

END;
$$;
