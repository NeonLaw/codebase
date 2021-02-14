--! Previous: sha1:8b129781288c8cf3c64f167243ce42ed4cab9bc8
--! Hash: sha1:9b504acb3794ac5d0bdcf772200b0d8a756d4163

-- Enter migration here

ALTER TABLE question ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;

ALTER TABLE question ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT CURRENT_TIMESTAMP NOT NULL;


DROP TRIGGER IF EXISTS set_updated_at_on_question ON public.question;

-- This trigger updates the updated_at column when a question is saved.

CREATE TRIGGER set_updated_at_on_question
BEFORE
UPDATE ON question
FOR EACH ROW EXECUTE PROCEDURE set_updated_at();
