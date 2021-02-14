--! Previous: sha1:9b504acb3794ac5d0bdcf772200b0d8a756d4163
--! Hash: sha1:e708c9b98c37a8baa88bcd09f664cd3f8e665ead

-- Enter migration here

CREATE TABLE IF NOT EXISTS questionnaire(id uuid DEFAULT uuid_generate_v4() NOT NULL,
                                                                     PRIMARY KEY (id));

SELECT create_primary_key_id_if_not_exists('questionnaire');

ALTER TABLE questionnaire ADD COLUMN IF NOT EXISTS name VARCHAR NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS question_names ON questionnaire (name);

ALTER TABLE questionnaire ADD COLUMN IF NOT EXISTS question_tree JSON NOT NULL;

COMMENT ON COLUMN public.questionnaire.id IS '@omit create,insert,update\nThe unique ID of a question';
COMMENT ON COLUMN public.questionnaire.name IS 'The name of the questionnaire';
COMMENT ON COLUMN public.questionnaire.question_tree IS 'The question tree or how a person answers the questionnaire';

GRANT SELECT ON question TO anonymous;
GRANT SELECT ON question TO portal;
GRANT SELECT ON question TO lawyer;
GRANT ALL ON question TO admin;

GRANT SELECT ON questionnaire TO anonymous;
GRANT SELECT ON questionnaire TO portal;
GRANT SELECT ON questionnaire TO lawyer;
GRANT ALL ON questionnaire TO admin;

ALTER TABLE questionnaire ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;

ALTER TABLE questionnaire ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;


DROP TRIGGER IF EXISTS set_updated_at_on_questionnaire ON public.questionnaire;

-- This trigger updates the updated_at column when a questionnaire is saved.

CREATE TRIGGER set_updated_at_on_questionnaire
BEFORE
UPDATE ON questionnaire
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();
