--! Previous: sha1:864b7bf97df20bacf25514f1955d099078a7859f
--! Hash: sha1:e23312eb47b89b7348301bc6a1f94c837e9dad78

-- Enter migration here

ALTER TABLE question DROP CONSTRAINT IF EXISTS question_question_type_check;
ALTER TABLE question ADD CONSTRAINT question_question_type_check CHECK (
  question_type IN (
    'single-choice',
    'single-date',
    'single-file-upload'
  )
);

DROP PROCEDURE IF EXISTS create_person_and_sub();

ALTER TABLE person ADD COLUMN IF NOT EXISTS sub VARCHAR;

CREATE UNIQUE INDEX IF NOT EXISTS person_subs ON person (sub);

DO $$
DECLARE
  temprow record;
BEGIN
  FOR temprow IN
    SELECT identifier, person_id FROM sub
  LOOP
    UPDATE person SET sub = temprow.identifier WHERE id = temprow.person_id;
  END LOOP;
END;
$$;

ALTER TABLE person ALTER COLUMN sub SET NOT NULL;
