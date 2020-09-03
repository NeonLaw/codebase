--! Previous: sha1:e708c9b98c37a8baa88bcd09f664cd3f8e665ead
--! Hash: sha1:ac9abc3c21e539fb3d48791be313bfb5ac49b0f6

-- Enter migration here

CREATE TABLE IF NOT EXISTS questionnaire_response(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

SELECT create_primary_key_id_if_not_exists('questionnaire_response');

ALTER TABLE questionnaire_response ADD COLUMN IF NOT EXISTS person_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'questionnaire_response_person_id_fkey') THEN
ALTER TABLE questionnaire_response ADD CONSTRAINT questionnaire_response_person_id_fkey
FOREIGN KEY (person_id) REFERENCES person(id);

END IF;

END;
$$;

CREATE INDEX IF NOT EXISTS person_id_on_questionnaire_response ON questionnaire_response (person_id);

ALTER TABLE questionnaire_response ADD COLUMN IF NOT EXISTS questionnaire_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'questionnaire_response_questionnaire_id_fkey') THEN
ALTER TABLE questionnaire_response ADD CONSTRAINT questionnaire_response_questionnaire_id_fkey
FOREIGN KEY (questionnaire_id) REFERENCES questionnaire(id);

END IF;

END;
$$;

CREATE INDEX IF NOT EXISTS questionnaire_id_on_questionnaire_response ON questionnaire_response (questionnaire_id);

COMMENT ON COLUMN public.questionnaire_response.id IS '@omit create,insert,update\nThe unique ID of a questionnaire response';

ALTER TABLE questionnaire_response ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;

ALTER TABLE questionnaire_response ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;

DROP TRIGGER IF EXISTS set_updated_at_on_questionnaire_response ON public.questionnaire_response;

-- This trigger updates the updated_at column when a questionnaire is saved.

CREATE TRIGGER set_updated_at_on_questionnaire_response
BEFORE
UPDATE ON questionnaire_response
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();

ALTER TABLE questionnaire_response ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS portal_select_questionnaire_response ON questionnaire_response;
CREATE POLICY portal_select_questionnaire_response ON questionnaire_response FOR SELECT TO portal
USING (person_id = nullif(current_setting('person.id', true), '')::uuid);

DROP POLICY IF EXISTS lawyer_select_questionnaire_response ON questionnaire_response;
CREATE POLICY lawyer_select_questionnaire_response ON questionnaire_response FOR SELECT TO lawyer
USING (person_id = nullif(current_setting('person.id', true), '')::uuid);

DROP POLICY IF EXISTS admin_modify_questionnaire_response ON questionnaire_response;
CREATE POLICY admin_modify_questionnaire_response ON questionnaire_response TO admin USING (true) WITH CHECK (true);

GRANT INSERT (person_id, questionnaire_id) ON questionnaire_response TO portal;
GRANT INSERT (person_id, questionnaire_id) ON questionnaire_response TO lawyer;

GRANT SELECT ON questionnaire_response TO portal;
GRANT SELECT ON questionnaire_response TO lawyer;

GRANT ALL ON questionnaire_response TO admin;
