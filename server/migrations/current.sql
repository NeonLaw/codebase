-- Enter migration here

ALTER TABLE response DROP COLUMN IF EXISTS questionnaire_response_id;
DROP TABLE questionnaire_response;

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
