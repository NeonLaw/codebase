--! Previous: sha1:65a692e9f94949e1f9cf2293674e781b1ab0cd72
--! Hash: sha1:618c8b34b4f1bd0b90f834f0f42049990cd0f569

-- Enter migration here

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
