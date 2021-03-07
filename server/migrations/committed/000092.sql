--! Previous: sha1:83287b309a90bc69a29881b87d2a255a30c1e321
--! Hash: sha1:5eafb788d49311e1c52617eef0c0e1fba5565319

-- Enter migration here

ALTER TABLE response DROP COLUMN IF EXISTS questionnaire_response_id;
DROP TABLE IF EXISTS questionnaire_response;

ALTER TABLE response ADD COLUMN IF NOT EXISTS person_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'response_person_id_fkey') THEN
ALTER TABLE response ADD CONSTRAINT response_person_id_fkey
FOREIGN KEY (person_id) REFERENCES person(id);

END IF;

END;
$$;

ALTER TABLE letter DROP COLUMN IF EXISTS addressee_id;
ALTER TABLE letter DROP COLUMN IF EXISTS addressor_id;

ALTER TABLE letter ADD COLUMN IF NOT EXISTS addressee_id uuid NOT NULL;

DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'letter_addressee_id_fkey') THEN
ALTER TABLE letter ADD CONSTRAINT letter_addressee_id_fkey
FOREIGN KEY (addressee_id) REFERENCES address(id);

END IF;

END;
$$;

ALTER TABLE letter ADD COLUMN IF NOT EXISTS addressor_id uuid NOT NULL;

DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'letter_addressor_id_fkey') THEN
ALTER TABLE letter ADD CONSTRAINT letter_addressor_id_fkey
FOREIGN KEY (addressor_id) REFERENCES address(id);

END IF;

END;
$$;
