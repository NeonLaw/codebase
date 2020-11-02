--! Previous: sha1:afcb5b8d2845a237c20fd4db57e6d3791f6a8e6d
--! Hash: sha1:a3bc47ad940542429fe5f3cdb52ec8324adee2d5

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
