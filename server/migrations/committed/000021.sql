--! Previous: sha1:ac9abc3c21e539fb3d48791be313bfb5ac49b0f6
--! Hash: sha1:864b7bf97df20bacf25514f1955d099078a7859f

-- Enter migration here

CREATE TABLE IF NOT EXISTS response(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

SELECT create_primary_key_id_if_not_exists('response');

ALTER TABLE response ADD COLUMN IF NOT EXISTS questionnaire_response_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'response_questionnaire_response_id_fkey') THEN
ALTER TABLE response ADD CONSTRAINT response_questionnaire_response_id_fkey
FOREIGN KEY (questionnaire_response_id) REFERENCES questionnaire_response(id);

END IF;

END;
$$;

CREATE INDEX IF NOT EXISTS questionnaire_response_id_on_response ON response (questionnaire_response_id);

ALTER TABLE response ADD COLUMN IF NOT EXISTS question_id uuid NOT NULL;

-- The following Do/End block is a way to create a foreign key relationship if one does not exist.
DO $$

BEGIN IF NOT EXISTS
  (SELECT 1
   FROM pg_constraint
   WHERE conname = 'response_question_id_fkey') THEN
ALTER TABLE response ADD CONSTRAINT response_question_id_fkey
FOREIGN KEY (question_id) REFERENCES question(id);

END IF;

END;
$$;

CREATE INDEX IF NOT EXISTS question_id_on_response ON response (question_id);

COMMENT ON COLUMN public.response.id IS '@omit create,insert,update\nThe unique ID of a response';

ALTER TABLE response ADD COLUMN IF NOT EXISTS answer varchar NOT NULL;

ALTER TABLE response ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;

ALTER TABLE response ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;

DROP TRIGGER IF EXISTS set_updated_at_on_response ON public.response;

-- This trigger updates the updated_at column when a questionnaire is saved.

CREATE TRIGGER set_updated_at_on_response
BEFORE
UPDATE ON response
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();

ALTER TABLE response ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION response_person_match(response_id UUID, person_id UUID)
RETURNS BOOLEAN AS $$
DECLARE match BOOLEAN := false;
BEGIN
  SELECT true
  FROM response AS r
  INNER JOIN questionnaire_response AS qr
  ON r.questionnaire_response_id = qr.id
  INNER JOIN person AS person
  ON qr.person_id = $2
  WHERE id = $1
  INTO match;
RETURN match;
end;
$$ LANGUAGE plpgsql STABLE;

DROP POLICY IF EXISTS portal_select_response ON response;
CREATE POLICY portal_select_response ON response FOR SELECT TO portal
USING (response_person_match(id, nullif(current_setting('person.id', true), '')::uuid));

DROP POLICY IF EXISTS lawyer_select_response ON response;
CREATE POLICY lawyer_select_response ON response FOR SELECT TO lawyer
USING (response_person_match(id, nullif(current_setting('person.id', true), '')::uuid));

DROP POLICY IF EXISTS portal_insert_response ON response;
CREATE POLICY portal_insert_response ON response FOR INSERT TO portal
WITH CHECK (response_person_match(id, nullif(current_setting('person.id', true), '')::uuid));

DROP POLICY IF EXISTS lawyer_insert_response ON response;
CREATE POLICY lawyer_insert_response ON response FOR INSERT TO lawyer
WITH CHECK (response_person_match(id, nullif(current_setting('person.id', true), '')::uuid));

DROP POLICY IF EXISTS admin_modify_response ON response;
CREATE POLICY admin_modify_response ON response TO admin USING (true) WITH CHECK (true);

GRANT INSERT (question_id, questionnaire_response_id) ON response TO portal;
GRANT INSERT (question_id, questionnaire_response_id) ON response TO lawyer;

GRANT SELECT ON response TO portal;
GRANT SELECT ON response TO lawyer;

GRANT ALL ON response TO admin;

-- Update insert policy for questionnaire response

DROP POLICY IF EXISTS portal_insert_questionnaire_response ON questionnaire_response;
CREATE POLICY portal_insert_questionnaire_response ON questionnaire_response FOR INSERT TO portal
WITH CHECK (person_id = nullif(current_setting('person.id', true), '')::uuid);

DROP POLICY IF EXISTS lawyer_insert_questionnaire_response ON questionnaire_response;
CREATE POLICY lawyer_insert_questionnaire_response ON questionnaire_response FOR INSERT TO lawyer
WITH CHECK (person_id = nullif(current_setting('person.id', true), '')::uuid);
