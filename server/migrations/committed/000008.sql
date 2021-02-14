--! Previous: sha1:9d79330d506da26bed7270cd49814f3994afccec
--! Hash: sha1:5fe02179d1b52c5a59311bb601adc4a5c5fc3aae

-- Enter migration here

CREATE OR REPLACE FUNCTION get_current_user() RETURNS person AS $$
DECLARE current_person_id uuid;
DECLARE current_person person%ROWTYPE;
BEGIN
  SELECT nullif(current_setting('person.id', true), '')::uuid INTO current_person_id;
  SELECT * FROM person WHERE id = current_person_id LIMIT 1 INTO current_person;
  RETURN current_person;
END;
$$ LANGUAGE plpgsql STABLE;


ALTER TABLE person ADD COLUMN IF NOT EXISTS picture varchar(64);


CREATE INDEX IF NOT EXISTS person_id_on_sub ON sub (person_id);
